import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://clkbjkcppoejxhelewps.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsa2Jqa2NwcG9lanhoZWxld3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3NDM2ODYsImV4cCI6MTk5ODMxOTY4Nn0.FiDR7o5SQqqFSSc7Yywvr2PHrPOCZjh3LyBLWL79bgo"
);
