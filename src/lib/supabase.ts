import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';
import { config } from '../config/auth';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wttwdqxijxvzylavmsrw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0dHdkcXhpanh2enlsYXZtc3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MjY1MjksImV4cCI6MjA0OTAwMjUyOX0.SnP-JfIMCPs_GRkSoc-Kyr_Gqblqh7gwI4YdBTNWb0E';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    storage: {
      getItem: (key) => {
        try {
          return localStorage.getItem(key);
        } catch (error) {
          console.error('Error accessing localStorage:', error);
          return null;
        }
      },
      setItem: (key, value) => {
        try {
          localStorage.setItem(key, value);
        } catch (error) {
          console.error('Error writing to localStorage:', error);
        }
      },
      removeItem: (key) => {
        try {
          localStorage.removeItem(key);
        } catch (error) {
          console.error('Error removing from localStorage:', error);
        }
      }
    },
    storageKey: 'supabase.auth.token',
    redirectTo: 'https://app.lienrich.com/auth',
    providers: ['google'],
    identityTokens: config.identityTokens,
    debug: import.meta.env.DEV
  }
});