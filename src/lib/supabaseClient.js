import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wdtdxphfyxqmjvcejosr.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkdGR4cGhmeXhxbWp2Y2Vqb3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MjEzMzcsImV4cCI6MjA5MDk5NzMzN30.xQ_0ZSqOLtABVT5FZ67OeuRhZGGv6zcEw3Hn1kklQvc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
