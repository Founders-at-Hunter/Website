import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  // get the number of rows (registered emails)
  const supabase = await createClient();
  const { count, error } = await supabase
    .from("Emails")
    .select("*", { count: "exact", head: true });

  return NextResponse.json(JSON.stringify({ data: count, error }), {
    status: error ? 400 : 201,
  });
}

export async function POST(request: Request) {
  // post email into Emails DB
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
