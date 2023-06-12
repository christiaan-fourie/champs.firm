import { FaGithub, FaLocationArrow, FaRegEnvelope, FaFacebook, FaHome, FaPenNib, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const littleLine = () => {
    return (
        <div className='w-1/2 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4'></div>
    )
}

export default function header() {
    return (
        <footer className="bottom-0 w-full border-t">
            <section className='flex flex-col md:flex-row lg:justify-evenly p-6'>
                <div className='p-12'>
                    <h1 className='text-start font-thin text-4xl'>Champs Firm</h1>
                    {littleLine()}
                    <p className='text-start max-w-md'>Champs firm is a consultancy company whose aim, and dream is to serve SMMEs at all positions in the African domain.</p>
                    <div className='flex justify-left gap-8 pt-8'>
                        <Link target='_blank' href='https://www.google.com/search?q=champs+firm+consulting+in+africa+facebook&oq=champs+firm+consulting+in+africa+facebook&aqs=chrome..69i57.359j0j1&sourceid=chrome&ie=UTF-8'>
                            <FaFacebook size={35} className='hover:bg-[#84be1f] hover:text-black rounded-full p-1 transition-all duration-500' />
                        </Link>
                        <Link target='_blank' href='https://twitter.com/champsfirm'>
                            <FaTwitter size={35} className='hover:bg-[#84be1f] hover:text-black rounded-full p-1 transition-all duration-500' />
                        </Link>
                        {/* <Link target='_blank' href=''>
                            <FaInstagram size={35} className='hover:bg-[#84be1f] hover:text-black rounded-full p-1 transition-all duration-500' />
                        </Link> */}
                        <Link target='_blank' href='https://github.com/christiaan-fourie/champs.firm'>
                            <FaGithub size={35} className='hover:bg-[#84be1f] hover:text-black rounded-full p-1 transition-all duration-500' />
                        </Link>
                    </div>
                </div>  
                <div className='p-12'>
                    <h1 className='text-start font-thin text-4xl'>Links</h1>
                    {littleLine()}
                    <div className='flex items-center'>
                        <FaHome size={20} className='m-6 ml-0' />
                        <div>
                            <h2 className='font-bold text-md'>Home</h2>
                            <p>/</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <FaPenNib size={20} className='m-6 ml-0' />
                        <div>
                            <h2 className='font-bold text-md'>About</h2>
                            <p>/about</p>
                        </div>
                    </div>
                </div>         
                <div className='p-12'>
                    <h1 className='text-start font-thin text-4xl'>Contact Us</h1>
                    {littleLine()}
                    <div className='flex items-center'>
                        <FaLocationArrow size={20} className='m-6 ml-0' />
                        <div>
                            <h2 className='font-bold text-md'>Address</h2>
                            <p>Cape Town, South Africa</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <FaRegEnvelope size={20} className='m-6 ml-0' />
                        <div>
                            <h2 className='font-bold text-md'>Email</h2>
                            <p>hello@champsfirm.africa</p>
                        </div>
                    </div>
                </div>           
            </section>
            <section
                className="w-full border-t">
                <p className="flex justify-between p-2 pl-6 items-center">
                    <span className="text-sm font-thin"> © Copyright 2023 Champs Firm | Dev with Psytech </span>
                    <Link target='_blank' href='https://github.com/christiaan-fourie/champs.firm'>
                        <FaGithub size={30} className='p-1' title='Source Code'  />
                    </Link>
                </p>
            </section>
        </footer>
    )
}
  