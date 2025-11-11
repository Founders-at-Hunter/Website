import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

const supabase = await createClient();

export async function GET() {
  const { data, error } = await supabase.from("Emails").select();

  return NextResponse.json(JSON.stringify({ data, error }), {
    status: error ? 400 : 201,
  });
}

export async function POST(request: Request) {
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
