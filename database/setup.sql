-- JavaScript Mastery Course Database Setup
-- Run these SQL commands in your Supabase SQL Editor

-- Create users table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    role TEXT DEFAULT 'student' CHECK (role IN ('student', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create student_progress table
CREATE TABLE IF NOT EXISTS public.student_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    lesson_id INTEGER NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE,
    time_spent INTEGER DEFAULT 0, -- in minutes
    score INTEGER, -- optional score out of 100
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, lesson_id)
);

-- Create user_sessions table for tracking active learning sessions
CREATE TABLE IF NOT EXISTS public.user_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    lesson_id INTEGER NOT NULL,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    session_data JSONB, -- store any session-specific data
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, lesson_id)
);

-- Create lesson_analytics table for course-wide statistics
CREATE TABLE IF NOT EXISTS public.lesson_analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lesson_id INTEGER UNIQUE NOT NULL,
    total_completions INTEGER DEFAULT 0,
    average_time INTEGER DEFAULT 0, -- in minutes
    difficulty_rating DECIMAL(3,2), -- calculated based on time and completion rates
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create achievements table
CREATE TABLE IF NOT EXISTS public.achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    achievement_type TEXT NOT NULL, -- 'first_lesson', 'halfway', 'speed_learner', 'completion'
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, achievement_type)
);

-- Insert initial lesson analytics data
INSERT INTO public.lesson_analytics (lesson_id, total_completions, average_time) VALUES
(1, 0, 0),
(2, 0, 0),
(3, 0, 0),
(4, 0, 0),
(5, 0, 0),
(6, 0, 0)
ON CONFLICT (lesson_id) DO NOTHING;

-- Create function to automatically create user profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
        COALESCE(NEW.raw_user_meta_data->>'role', 'student')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update lesson analytics
CREATE OR REPLACE FUNCTION public.update_lesson_analytics()
RETURNS TRIGGER AS $$
BEGIN
    -- Update analytics when a lesson is completed
    IF NEW.completed_at IS NOT NULL AND (OLD.completed_at IS NULL OR OLD.completed_at != NEW.completed_at) THEN
        UPDATE public.lesson_analytics
        SET 
            total_completions = (
                SELECT COUNT(*) 
                FROM public.student_progress 
                WHERE lesson_id = NEW.lesson_id AND completed_at IS NOT NULL
            ),
            average_time = (
                SELECT COALESCE(AVG(time_spent), 0)::INTEGER
                FROM public.student_progress 
                WHERE lesson_id = NEW.lesson_id AND completed_at IS NOT NULL AND time_spent > 0
            ),
            updated_at = NOW()
        WHERE lesson_id = NEW.lesson_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for analytics updates
DROP TRIGGER IF EXISTS on_progress_updated ON public.student_progress;
CREATE TRIGGER on_progress_updated
    AFTER INSERT OR UPDATE ON public.student_progress
    FOR EACH ROW EXECUTE FUNCTION public.update_lesson_analytics();

-- Row Level Security Policies

-- Users can only see their own data
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- Student progress policies
ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can view own progress" ON public.student_progress
    FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Students can insert own progress" ON public.student_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Students can update own progress" ON public.student_progress
    FOR UPDATE USING (auth.uid() = user_id);

-- User sessions policies
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can manage own sessions" ON public.user_sessions
    FOR ALL USING (auth.uid() = user_id);

-- Achievements policies
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can view own achievements" ON public.achievements
    FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Students can insert own achievements" ON public.achievements
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Lesson analytics - read-only for students, full access for admins
ALTER TABLE public.lesson_analytics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view lesson analytics" ON public.lesson_analytics
    FOR SELECT USING (true);

-- Admin policies (admins can see all data)
CREATE POLICY "Admins can view all users" ON public.users
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can view all progress" ON public.student_progress
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can view all sessions" ON public.user_sessions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can view all achievements" ON public.achievements
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can update lesson analytics" ON public.lesson_analytics
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_student_progress_user_id ON public.student_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_student_progress_lesson_id ON public.student_progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_student_progress_completed ON public.student_progress(completed_at) WHERE completed_at IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON public.user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_lesson_id ON public.user_sessions(lesson_id);
CREATE INDEX IF NOT EXISTS idx_achievements_user_id ON public.achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);

-- Create a view for admin dashboard statistics
CREATE OR REPLACE VIEW public.admin_stats AS
SELECT 
    (SELECT COUNT(*) FROM public.users WHERE role = 'student') as total_students,
    (SELECT COUNT(DISTINCT user_id) FROM public.student_progress WHERE completed_at IS NOT NULL) as active_students,
    (SELECT ROUND(AVG(completion_rate), 2) FROM (
        SELECT 
            user_id,
            (COUNT(*) FILTER (WHERE completed_at IS NOT NULL) * 100.0 / 6) as completion_rate
        FROM public.student_progress 
        GROUP BY user_id
    ) as user_completions) as avg_completion_rate,
    (SELECT ROUND(AVG(time_spent), 0) FROM public.student_progress WHERE completed_at IS NOT NULL) as avg_time_per_lesson;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Create admin user function (run this after creating your first admin account)
-- Replace 'admin@example.com' with your actual admin email
/*
UPDATE auth.users 
SET raw_user_meta_data = raw_user_meta_data || '{"role": "admin"}'::jsonb
WHERE email = 'admin@example.com';

UPDATE public.users 
SET role = 'admin' 
WHERE email = 'admin@example.com';
*/

-- Success message
SELECT 'Database setup completed successfully! 🎉' as message;
