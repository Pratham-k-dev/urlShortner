import { NextResponse } from "next/server";
import pool from "@/app/lib/postgres";
import redis from "@/app/lib/redis";

export async function GET(req, { params }) {
  const shortCode = params.slug;
  const cacheKey = `short:${shortCode}`;

  try {
    // 1. Redis
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.redirect(cached);
    }

    // 2. DB
    const result = await pool.query(
      `SELECT original_url FROM urls WHERE short_code = $1`,
      [shortCode]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const originalUrl = result.rows[0].original_url;

    // 3. Cache
    await redis.set(cacheKey, originalUrl, "EX", 3600);

    // 4. Redirect
    return NextResponse.redirect(originalUrl);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}