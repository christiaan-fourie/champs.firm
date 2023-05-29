import Image from "next/image"
import Link from "next/link"

export default function header() {
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
        <ul className="flex gap-6">
           <Link href='/'><li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">Home</li></Link>
           <Link href='/about'><li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">About</li></Link>
           <Link href='/services'><li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">Services</li></Link>
           <Link href='/contact'><li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">Contact</li></Link>
        </ul>
    </header>
    </div>
  )
}
