"use client"
import React, { useState } from 'react'
import {  useSession } from 'next-auth/react'

function generate() {
    const {data:session} =useSession();
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [ok, setOk] = useState(false)
    const handler = async () => {
        
        if(!session) return alert("please signgin to continue")
        let a = await fetch('/api/setshorturl', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url,shorturl,userId:session.user.id }),
        })
        const res=await a.json();
        alert(res.message)
        setOk(res.success)
        console.log('called')
    }
    return (
      <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-sm border border-blue-100 p-6 mb-10">
  <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
    <span className="text-blue-600">⚡</span> Create New Short Link
  </h2>

  <form action={handler} className="flex flex-col md:flex-row gap-4">
    <input 
      type="text" 
      placeholder="Enter long URL (e.g. https://google.com)" 
      name="url" 
      value={url} 
      onChange={(e) => seturl(e.target.value)} 
      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700"
    />
    
    <input 
      type="text" 
      placeholder="Custom slug" 
      name="shorturl" 
      value={shorturl} 
      onChange={(e) => setshorturl(e.target.value)} 
      className="w-full md:w-48 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 font-mono text-sm"
    />

    <button 
      type="submit" 
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/25"
    >
      Generate
    </button>
  </form>

  {/* Success Message */}
  {ok && (
    <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-green-600 text-xl">✅</span>
        <div>
          <p className="text-sm text-green-700 font-medium">Link generated successfully!</p>
          <p className="text-green-600 font-mono text-xs">
            {process.env.NEXT_PUBLIC_APP_URL}/{shorturl}
          </p>
        </div>
      </div>
      <button 
        onClick={() => navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_APP_URL}/${shorturl}`)}
        className="text-xs font-bold uppercase tracking-wider text-green-700 hover:text-green-800 underline decoration-2 underline-offset-4"
      >
        Copy Link
      </button>
    </div>
  )}
</div>
    )
}

export default generate
