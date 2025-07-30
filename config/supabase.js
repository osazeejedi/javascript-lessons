// Supabase Configuration
const SUPABASE_URL = 'https://mopujykbhuumbdcuxnnj.supabase.co';
// ⚠️ DEVELOPMENT ONLY: Using service role key for testing
// This key has full database access and bypasses RLS - NEVER use in production!
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcHVqeWtiaHV1bWJkY3V4bm5qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mzc5MjA2NSwiZXhwIjoyMDY5MzY4MDY1fQ.-nNn2LoxILVnrjWW2cPV7PlQIGpHEaCkiybo4dkTvMA';

// Initialize Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Authentication functions
const auth = {
    // Sign up new user
    async signUp(email, password, fullName) {
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: fullName,
                        role: 'student'
                    }
                }
            });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Sign up error:', error);
            return { success: false, error: error.message };
        }
    },

    // Sign in user
    async signIn(email, password) {
        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Sign in error:', error);
            return { success: false, error: error.message };
        }
    },

    // Sign out user
    async signOut() {
        try {
            const { error } = await supabaseClient.auth.signOut();
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Sign out error:', error);
            return { success: false, error: error.message };
        }
    },

    // Get current user
    async getCurrentUser() {
        try {
            const { data: { user }, error } = await supabaseClient.auth.getUser();
            if (error) throw error;
            return user;
        } catch (error) {
            console.error('Get user error:', error);
            return null;
        }
    },

    // Check if user is admin
    async isAdmin() {
        const user = await this.getCurrentUser();
        return user?.user_metadata?.role === 'admin';
    },

    // Listen to auth state changes
    onAuthStateChange(callback) {
        return supabaseClient.auth.onAuthStateChange(callback);
    }
};

// Progress tracking functions
const progress = {
    // Record lesson completion
    async completeLesson(lessonId, timeSpent = 0, score = null) {
        try {
            const user = await auth.getCurrentUser();
            if (!user) throw new Error('User not authenticated');

            const { data, error } = await supabaseClient
                .from('student_progress')
                .upsert({
                    user_id: user.id,
                    lesson_id: lessonId,
                    completed_at: new Date().toISOString(),
                    time_spent: timeSpent,
                    score: score
                });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Complete lesson error:', error);
            return { success: false, error: error.message };
        }
    },

    // Get user progress
    async getUserProgress(userId = null) {
        try {
            const user = userId || (await auth.getCurrentUser())?.id;
            if (!user) throw new Error('User not found');

            const { data, error } = await supabaseClient
                .from('student_progress')
                .select('*')
                .eq('user_id', user)
                .order('completed_at', { ascending: false });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Get progress error:', error);
            return { success: false, error: error.message };
        }
    },

    // Start lesson session
    async startLessonSession(lessonId) {
        try {
            const user = await auth.getCurrentUser();
            if (!user) throw new Error('User not authenticated');

            const { data, error } = await supabaseClient
                .from('user_sessions')
                .upsert({
                    user_id: user.id,
                    lesson_id: lessonId,
                    started_at: new Date().toISOString(),
                    last_activity: new Date().toISOString()
                });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Start session error:', error);
            return { success: false, error: error.message };
        }
    },

    // Update lesson session activity
    async updateSessionActivity(lessonId) {
        try {
            const user = await auth.getCurrentUser();
            if (!user) throw new Error('User not authenticated');

            const { data, error } = await supabaseClient
                .from('user_sessions')
                .update({ last_activity: new Date().toISOString() })
                .eq('user_id', user.id)
                .eq('lesson_id', lessonId);

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Update session error:', error);
            return { success: false, error: error.message };
        }
    }
};

// Admin functions
const admin = {
    // Get all students with progress
    async getAllStudents() {
        try {
            const { data, error } = await supabaseClient
                .from('users')
                .select(`
                    *,
                    student_progress (
                        lesson_id,
                        completed_at,
                        time_spent,
                        score
                    )
                `)
                .eq('role', 'student')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Get students error:', error);
            return { success: false, error: error.message };
        }
    },

    // Get course analytics
    async getCourseAnalytics() {
        try {
            const { data, error } = await supabaseClient
                .from('lesson_analytics')
                .select('*')
                .order('lesson_id');

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Get analytics error:', error);
            return { success: false, error: error.message };
        }
    },

    // Update lesson analytics
    async updateLessonAnalytics(lessonId) {
        try {
            // Get completion count and average time for this lesson
            const { data: progressData, error: progressError } = await supabaseClient
                .from('student_progress')
                .select('time_spent')
                .eq('lesson_id', lessonId);

            if (progressError) throw progressError;

            const totalCompletions = progressData.length;
            const averageTime = progressData.reduce((sum, p) => sum + (p.time_spent || 0), 0) / totalCompletions || 0;

            const { data, error } = await supabaseClient
                .from('lesson_analytics')
                .upsert({
                    lesson_id: lessonId,
                    total_completions: totalCompletions,
                    average_time: Math.round(averageTime),
                    updated_at: new Date().toISOString()
                });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Update analytics error:', error);
            return { success: false, error: error.message };
        }
    }
};

// Export all functions
window.supabaseClient = supabaseClient;
window.auth = auth;
window.progress = progress;
window.admin = admin;

console.log('🔐 Supabase authentication system loaded!');
