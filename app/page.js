
import Image from "next/image";
import { signIn,auth,signOut } from "@/auth"
import Link from "next/link";

export default async function Home() {
   const session = await auth()
  return (
    <>
    <main className="flex flex-col items-center">
  {/* 1. Hero Content */}
  <section className="w-full max-w-5xl px-6 pt-16 pb-24 text-center md:pt-24">
    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
      Now with custom slugs ⚡
    </div>
    
    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
      Make your links <br />
      <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
        unforgettable.
      </span>
    </h1>

    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
      Stop sharing long, ugly URLs. Create short, branded links that look professional and are easy to track.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/generate" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:-translate-y-1">
        Start Shortening
      </Link>
      <Link href="#features" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
        View Examples
      </Link>
    </div>
  </section>

  {/* 2. Visual Feature Section */}
  <section id="features" className="w-full max-w-6xl px-6 py-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="group">
        <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Instant Redirection</h3>
        <p className="text-slate-600 leading-relaxed">Global edge servers ensure your links redirect in milliseconds, no matter where your audience is.</p>
      </div>

      <div className="group">
        <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Custom Slugs</h3>
        <p className="text-slate-600 leading-relaxed">Ditch the random gibberish. Pick names that tell people exactly what they are clicking on.</p>
      </div>

      <div className="group">
        <div className="w-14 h-14 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Personal History</h3>
        <p className="text-slate-600 leading-relaxed">Save every link to your private dashboard. Never lose track of your important URLs again.</p>
      </div>
    </div>
  </section>
</main>



    
    </>

    
  );
}
