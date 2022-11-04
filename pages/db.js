import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eruwoqmpgzodfxzajcwj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydXdvcW1wZ3pvZGZ4emFqY3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1MTExMDksImV4cCI6MTk4MzA4NzEwOX0.WpbFuvVt1AlSwAYMRquS4kKAgwlZ-wFxDhTed-sgHXI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})