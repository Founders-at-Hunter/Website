import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("Emails").select();

  return NextResponse.json(JSON.stringify({ data, error }), {
    status: error ? 400 : 201,
  });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const body = await request.json();
  const { name, email } = body;
  const { data, error } = await supabase
    .from("Emails")
    .insert({ name, email })
    .select();

  return NextResponse.json(JSON.stringify({ data, error }), {
    status: error ? 400 : 201,
  });
}
