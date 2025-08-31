import { createClient } from '@supabase/supabase-js';
import { Database } from './types/database.types';

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if(!supabaseUrl || !supabaseKey){
    throw new Error("Supabase URL or Key is missing")
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)