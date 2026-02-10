import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { auth } from "@/auth";


export async function GET() {
    const session=await auth()
    if (!session) {
            return NextResponse.json({ success: false, data: [] }, { status: 401 });
        }

     const client = await clientPromise
    const db = client.db('shorturl')
    
    
    const data= await db.collection('urlcollec').find({userEmail:session.user.email}).toArray()
   
  return NextResponse.json({success:true, data:data  });
}
