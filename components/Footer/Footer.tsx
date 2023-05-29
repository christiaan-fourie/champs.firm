import { FaGithub, FaLocationArrow, FaRegEnvelope, FaFacebook, FaHome, FaPenNib, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const littleLine = () => {
    return (
        <div className='w-1/6 h-[1px] bg-[#84be1f] my-4'></div>
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
                        <FaFacebook size={35} className='hover:bg-[#84be1f] hover:text-black rounded-full p-1 transition-all duration-500' />
                        <FaTwitter size={35} className='hover:bg-[#84be1f] hover:text-black rounded-full p-1 transition-all duration-500' />
                        <FaInstagram size={35} className='hover:bg-[#84be1f] hover:text-black rounded-full p-1 transition-all duration-500'  />
                        <FaGithub size={35} className='hover:bg-[#84be1f] hover:text-black rounded-full p-1 transition-all duration-500'  />
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
                            <p>keith@champsfirm.africa</p>
                        </div>
                    </div>
                </div>           
            </section>
            <section
                className="w-full border-t">
                <p className="flex justify-between p-2 items-center"><span className="text-center"> © Copyright 2023 Champs Firm | Dev with Psytech </span><FaGithub size={30} /> </p>
            </section>
        </footer>
    )
}
  