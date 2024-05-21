import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='w-full px-16 py-10 bg-red-950 flex flex-col lg:flex-row gap-5 justify-between items-center'>
            <div className='flex flex-col text-white text-xl'>
                <Link href="/" className='font-bold text-4xl lg:text-6xl'>Vinklubben</Link>
                <span className='italic'>Anno 2021</span>
            </div>
            <div className='flex gap-5'>
                <Link href="/vinkaelderen" className='bg-white rounded-md text-red-950 py-1.5 px-3 lg:px-6 lg:py-3 lg:text-2xl font-semibold'>Vinkælderen</Link>
                <Link href="/members" className='bg-white rounded-md text-red-950 py-1.5 px-3 lg:px-6 lg:py-3 lg:text-2xl font-semibold'>Medlemmer</Link>
            </div>
        </nav>
    )
}
