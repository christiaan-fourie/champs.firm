import Image from "next/image"

export default function header() {
  return (
    <div>
      <header className="flex justify-between items-center w-full px-12 border-b py-4">
        <h1 className="text-2xl"><Image alt="" src='/assets/logo.png' width={60} height={60} /></h1>
        <ul className="flex gap-6">
          <li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">Home</li>
          <li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">About</li>
          <li className="hover:bg-[#84be1f] hover:text-black px-4 py-2 rounded-md">Services</li>
        </ul>
    </header>
    </div>
  )
}
