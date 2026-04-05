import { NextResponse } from "next/server";
import pool from "@/app/lib/postgres";
import { auth } from "@/auth";

export async function GET() {
  return NextResponse.json({ message: "Hello API" });
}

export async function POST(request) {
  try {
    const session = await auth();
    const { url, shorturl } = await request.json();

    if (!url || !shorturl) {
      return NextResponse.json({
        success: false,
        message: "Missing fields"
      });
    }

    const query = `
      INSERT INTO urls (original_url, short_code, user_email)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [url, shorturl, session?.user?.email || null];

    const result = await pool.query(query, values);

    return NextResponse.json({
      success: true,
      data: result.rows[0]
    });

  } catch (err) {

    // Handle duplicate short_code
    if (err.code === '23505') {
      return NextResponse.json({
        success: false,
        message: 'Short URL already exists'
      });
    }

    console.error(err);

    return NextResponse.json({
      success: false,
      message: 'Server error'
    });
  }
}