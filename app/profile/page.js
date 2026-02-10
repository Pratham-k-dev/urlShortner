"use client"
import React,{useEffect,useState} from 'react'
import UrlCard from '../components/UrlCard'
import {  useSession } from 'next-auth/react'

function page() {

    const { data:session } =useSession()
    
    const [links, setlinks] = useState([])
    useEffect( () => {

        let call=async()=>{
      let temp= await fetch("/api/getLinks")
      
      let res= await temp.json()

      console.log(res.data)
      setlinks(res.data)
      

        }
        call()
    }, [])

    useEffect(() => {
      console.log(links)
    }, [links])
    
    

  return (
  <>
  <div className="min-h-screen bg-slate-50 px-4 py-10">
    <div className="mx-auto max-w-4xl">
      
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between border-b border-blue-100 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Your Dashboard</h1>
          <p className="text-sm text-slate-500">Manage and track your shortened URLs</p>
        </div>
        <div className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          {links.length} Links
        </div>
      </div>

      {/* Grid/List Container */}
      <div className="flex flex-col gap-4">
        {links.length > 0 ? (
          links.map((items, i) => (
            <UrlCard key={items._id || i} url={items.url} shorturl={items.shorturl} />
          ))
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-100 py-20 text-center">
            <div className="mb-3 text-4xl">🔗</div>
            <h3 className="text-lg font-medium text-slate-700">No links yet</h3>
            <p className="text-slate-500">Create your first short URL to see it here.</p>
          </div>
        )}
      </div>

    </div>
  </div>
</>
  )
}

export default page
