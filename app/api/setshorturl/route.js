import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { auth } from "@/auth";

export async function GET() {
  return NextResponse.json({ message: "Hello API" });
}
export async function POST(request) {

    const session=await auth()

     const client = await clientPromise
    const db = client.db('shorturl')
    const {url,shorturl,userId} =await request.json()
    console.log(url,shorturl)

    if(await db.collection('urlcollec').findOne({shorturl})) return NextResponse.json({ success:false ,message:'short url exists' })
    await db.collection('urlcollec').insertOne({
        url:url,
        shorturl:shorturl,
        userEmail: session.user.email
    })
  return NextResponse.json({success:true, message:'successfully inserted' });
}