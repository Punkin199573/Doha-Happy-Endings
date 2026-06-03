import { createClient } from "@supabase/supabase-js";

const supabaseUrl      = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured =
  Boolean(supabaseUrl && supabaseAnonKey &&
    supabaseUrl !== "" && supabaseAnonKey !== "");

// Use placeholder values so createClient() never throws at module load time.
// Auth calls are guarded by `isSupabaseConfigured` below.
export const supabase = createClient(
  supabaseUrl  || "https://placeholder.supabase.co",
  supabaseAnonKey || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder",
  {
    auth: {
      autoRefreshToken:   isSupabaseConfigured,
      persistSession:     isSupabaseConfigured,
      detectSessionInUrl: isSupabaseConfigured,
    },
  }
);

export type UserRole = "giver" | "client";

export interface GiverProfile {
  user_id:       string;
  stage_name:    string;
  age:           number;
  location:      string;
  bio:           string;
  hourly_rate:   number;
  overnight_rate?: number;
  currency:      string;
  services:      string[];
  verified:      boolean;
  premium:       boolean;
  created_at:    string;
}

export interface ClientProfile {
  user_id:      string;
  display_name: string;
  age:          number;
  location:     string;
  budget?:      number;
  preferences:  string[];
  created_at:   string;
}

/** Sign up — stores role + metadata in auth.users.raw_user_meta_data */
export async function signUp(
  email: string,
  password: string,
  role: UserRole,
  metadata: Record<string, unknown> = {}
) {
  if (!isSupabaseConfigured) {
    return {
      data: null,
      error: { message: "Supabase not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY." },
    };
  }
  return supabase.auth.signUp({
    email,
    password,
    options: { data: { role, ...metadata } },
  });
}

/** Sign in with email + password */
export async function signIn(email: string, password: string) {
  if (!isSupabaseConfigured) {
    return {
      data: null,
      error: { message: "Supabase not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY." },
    };
  }
  return supabase.auth.signInWithPassword({ email, password });
}

/** Sign out */
export async function signOut() {
  return supabase.auth.signOut();
}

/** Get current authenticated user */
export async function getUser() {
  if (!isSupabaseConfigured) return null;
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

/** Get user role from metadata */
export async function getUserRole(): Promise<UserRole | null> {
  const user = await getUser();
  return (user?.user_metadata?.role as UserRole) ?? null;
}

/** Fetch a giver's profile row */
export async function getGiverProfile(userId: string) {
  return supabase
    .from("giver_profiles")
    .select("*")
    .eq("user_id", userId)
    .single();
}

/** Fetch a client's profile row */
export async function getClientProfile(userId: string) {
  return supabase
    .from("client_profiles")
    .select("*")
    .eq("user_id", userId)
    .single();
}

/** List verified giver profiles for public browse */
export async function listGivers(filters?: { location?: string; service?: string }) {
  let query = supabase
    .from("giver_profiles")
    .select("*")
    .eq("verified", true)
    .order("created_at", { ascending: false });

  if (filters?.location) query = query.ilike("location", `%${filters.location}%`);
  if (filters?.service)  query = query.contains("services", [filters.service]);

  return query;
}
