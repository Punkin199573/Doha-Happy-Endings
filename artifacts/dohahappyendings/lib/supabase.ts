// Browser (client-side) Supabase client via @supabase/ssr
export { createClient } from "@/utils/supabase/client";

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

export type UserRole = "giver" | "client";

export interface GiverProfile {
  user_id:        string;
  stage_name:     string;
  age:            number;
  location:       string;
  bio:            string;
  hourly_rate:    number;
  overnight_rate?: number;
  currency:       string;
  services:       string[];
  verified:       boolean;
  premium:        boolean;
  created_at:     string;
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

/** Sign up a new user and store role in metadata */
export async function signUp(
  email: string,
  password: string,
  role: UserRole,
  metadata: Record<string, unknown> = {}
) {
  const { createClient } = await import("@/utils/supabase/client");
  const supabase = createClient();
  return supabase.auth.signUp({
    email,
    password,
    options: { data: { role, ...metadata } },
  });
}

/** Sign in with email + password */
export async function signIn(email: string, password: string) {
  const { createClient } = await import("@/utils/supabase/client");
  const supabase = createClient();
  return supabase.auth.signInWithPassword({ email, password });
}

/** Sign out */
export async function signOut() {
  const { createClient } = await import("@/utils/supabase/client");
  const supabase = createClient();
  return supabase.auth.signOut();
}

/** Get current user (client-side) */
export async function getUser() {
  if (!isSupabaseConfigured) return null;
  const { createClient } = await import("@/utils/supabase/client");
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

/** Get user role from metadata */
export async function getUserRole(): Promise<UserRole | null> {
  const user = await getUser();
  return (user?.user_metadata?.role as UserRole) ?? null;
}
