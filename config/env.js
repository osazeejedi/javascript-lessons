// Environment Configuration Loader
// This file provides a way to load environment variables for client-side applications

class EnvironmentConfig {
    constructor() {
        this.config = {};
        this.loaded = false;
    }

    // Load environment variables from .env file
    async loadFromFile() {
        try {
            const response = await fetch('../.env');
            if (!response.ok) {
                throw new Error('Could not load .env file');
            }
            
            const envText = await response.text();
            this.parseEnvText(envText);
            this.loaded = true;
            console.log('✅ Environment variables loaded from .env file');
        } catch (error) {
            console.warn('⚠️ Could not load .env file, using fallback configuration');
            this.loadFallbackConfig();
        }
    }

    // Parse .env file content
    parseEnvText(envText) {
        const lines = envText.split('\n');
        
        lines.forEach(line => {
            // Skip comments and empty lines
            if (line.trim() === '' || line.trim().startsWith('#')) {
                return;
            }
            
            // Parse KEY=VALUE format
            const [key, ...valueParts] = line.split('=');
            if (key && valueParts.length > 0) {
                const value = valueParts.join('=').trim();
                this.config[key.trim()] = value;
            }
        });
    }

    // Fallback configuration if .env file is not available
    loadFallbackConfig() {
        this.config = {
            SUPABASE_URL: 'https://mopujykbhuumbdcuxnnj.supabase.co',
            SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcHVqeWtiaHV1bWJkY3V4bm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3OTIwNjUsImV4cCI6MjA2OTM2ODA2NX0.9cxFu3VD5Na0htjbSh-604_rrY3mmpnvOdgWDEtcnxc',
            SUPABASE_SERVICE_ROLE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcHVqeWtiaHV1bWJkY3V4bm5qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mzc5MjA2NSwiZXhwIjoyMDY5MzY4MDY1fQ.-nNn2LoxILVnrjWW2cPV7PlQIGpHEaCkiybo4dkTvMA',
            NODE_ENV: 'development'
        };
        this.loaded = true;
    }

    // Get environment variable
    get(key) {
        return this.config[key];
    }

    // Get Supabase configuration
    getSupabaseConfig() {
        return {
            url: this.get('SUPABASE_URL'),
            anonKey: this.get('SUPABASE_ANON_KEY'),
            serviceRoleKey: this.get('SUPABASE_SERVICE_ROLE_KEY')
        };
    }

    // Check if running in development mode
    isDevelopment() {
        return this.get('NODE_ENV') === 'development';
    }

    // Wait for config to be loaded
    async waitForLoad() {
        if (this.loaded) return;
        
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds max wait
        
        while (!this.loaded && attempts < maxAttempts) {
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
        }
        
        if (!this.loaded) {
            console.warn('⚠️ Environment config loading timed out, using fallback');
            this.loadFallbackConfig();
        }
    }
}

// Create global instance
window.envConfig = window.envConfig || new EnvironmentConfig();

// Auto-load configuration
window.envConfig.loadFromFile();

console.log('🔧 Environment configuration system loaded');
