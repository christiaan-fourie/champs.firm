'use client'

import Image from "next/image"
import Link from "next/link"

import {useState} from 'react'

export default function header() {

  const [showMenu, setShowMenu] = useState(false)

  // Toggle menu
  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    }
    else {
      setShowMenu(true)
    }
  }
  
  return (
    <div className="sticky top-0 glass">

      <header className="flex justify-between items-center w-full px-12 border-b py-4">
        <div className="flex items-center">
          <Image alt="" src='/assets/logo.png' width={60} height={60} />
          <div className="flex flex-col pl-2">
            <span className="text-4xl font-thin">
              Champs            
            </span> 
            <span className="text-2xl -translate-y-2 font-bold pl-4">
              Firm
            </span>
          </div>          
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#84be1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>




        <ul className="hidden md:flex gap-6">
           <Link href='/'><li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">Home</li></Link>
           <Link href='/about'><li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">About</li></Link>
           <Link href='/services'><li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">Services</li></Link>
           <Link href='/contact'><li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">Contact</li></Link>
        </ul>

        
      </header>
      {showMenu &&
        <ul className="fixed md:hidden w-full text-center bg-black bg-opacity-70  text-white">
          <Link href='/' onClick={toggleMenu} ><li className="py-4 hover:bg-[#84be1f] shadow-[#84be1f] drop-shadow-md hover:text-black transition-all duration-200">Home</li></Link>
          <Link href='/about' onClick={toggleMenu} ><li className="py-4 hover:bg-[#84be1f] hover:text-black transition-all">About</li></Link>
          <Link href='/services' onClick={toggleMenu} ><li className="py-4 hover:bg-[#84be1f] hover:text-black transition-all">Services</li></Link>
          <Link href='/contact' onClick={toggleMenu} ><li className="py-4 hover:bg-[#84be1f] hover:text-black transition-all">Contact</li></Link>
        </ul>
      }
    </div>
  )
}
