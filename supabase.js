import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://ufghzsaaqhmnjoxzvuwr.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZ2h6c2FhcWhtbmpveHp2dXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1OTUzNjUsImV4cCI6MjA5NjE3MTM2NX0.XXYx045YJ6i35zs2y7_5Nu0rQwIDMR1bpZNzATZdyTk"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
