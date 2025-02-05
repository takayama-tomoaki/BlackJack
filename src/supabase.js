import { createClient } from "@supabase/supabase-js";
/* eslint-disable no-undef */

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
/* eslint-enable no-undef */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
