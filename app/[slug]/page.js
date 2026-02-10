import React from 'react'
import { redirect } from 'next/navigation'
import clientPromise from "@/app/lib/mongodb";
// import { useParams } from 'next/navigation'

async function page({params}) {
    // const params=useParams()
  const client = await clientPromise
    const db = client.db('shorturl')
    const res= await params
    const shorturl=res.slug


    const data =await db.collection('urlcollec').findOne({shorturl:shorturl})
    console.log(shorturl,data)
    
      if(data) redirect(`${data.url}`)
        else 
    return <></>
}

export default page
