"use client"
import { useSession } from "next-auth/react"
import React, { useState } from 'react'
import Link from "next/link"
import { signOut, signIn } from "next-auth/react"


function Navbar() {
    const { data: session } = useSession()
    // console.log(session.user.name)
    const [clicked, setclicked] = useState(false)
    return (
        <>
            <nav className="sticky top-0 z-[100] bg-blue-600 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-white text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
                                URL<span className="text-blue-200">Shortner</span>
                            </Link>
                        </div>

                        {/* Navigation Links & Auth */}
                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center gap-6">
                                <Link href="/" className="text-blue-50 hover:text-white text-sm font-medium transition-colors">
                                    Home
                                </Link>
                                <Link href="/generate" className="text-blue-50 hover:text-white text-sm font-medium transition-colors">
                                    Generate
                                </Link>
                            </div>

                            <div className="flex items-center border-l border-blue-500 pl-6 gap-4">
                                {session?.user ? (
                                    <div className="relative">
                                        <img
                                            onClick={() => setclicked(prev => !prev)}
                                            src={session.user.image}
                                            alt="User Avatar"
                                            className="w-9 h-9 rounded-full ring-2 ring-blue-400 cursor-pointer hover:ring-white transition-all object-cover"
                                        />

                                        {/* Your styled dropdown will appear here because of the relative parent */}
                                        {clicked && (
                                            <div className="absolute right-0 mt-3 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl flex flex-col z-50">
                                                {/* ... (Your previously styled dropdown code) ... */}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => signIn("google")}
                                        className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors shadow-sm"
                                    >
                                        Sign In
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {clicked && <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl flex flex-col z-50">

                <Link
                    href="/profile"
                    className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-slate-100 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile
                </Link>

                <form
                    action={async () => {

                        await signOut({ callbackUrl: '/' })
                    }}
                    className="w-full"
                >
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                    </button>
                </form>
            </div>
            }
        </>
    )
}

export default Navbar
