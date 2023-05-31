import { FaLocationArrow, FaRegEnvelope, FaPhone } from 'react-icons/fa'

function contact() {
  return (
    <section className='min-h-[80vh] p-4 md:p-0'>
      <h1 className='
            text-3xl md:text-5x lg:text-6xl font-extrabold pt-6 md:pt-32 md:text-center bg-clip-text text-transparent
            bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70%'>
            Get in touch.
      </h1>
      <div className='w-1/6 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4 md:mx-auto'></div>

      <div className='md:flex md:justify-center'>
        <form className='flex flex-col gap-4 py-12 md:px-20 md:basis-1/2'>
          <input type="text" placeholder='Name' className='border border-[#84be1f] rounded-lg p-2 bg-black'/>
          <input type="email" placeholder='Email' className='border border-[#84be1f] rounded-lg p-2 bg-black'/>
          <textarea placeholder='Message' className='border border-[#84be1f] rounded-lg p-2 min-h-[100px] bg-black'/>
          <button className='hover:bg-[#84be1f] hover:text-black text-[#84be1f] bg-black border-[#84be1f] border font-bold rounded-lg p-2 transition-all duration-500 '>Send Message</button>
        </form>
        <div className='w-full flex-wrap lg:w-1/3 px-20 py-12'>
          <h1 className='text-start font-thin text-4xl'>Contact Us</h1>
          <div className='w-1/6 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4'></div>

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
            <div className='flex items-center'>
                <FaPhone size={20} className='m-6 ml-0' />
                <div>
                  <h2 className='font-bold text-md'>Phone</h2>
                  <p>+27 21 879 3035</p>
                </div>
            </div>   
        </div>
      </div>      

    </section>
    
  )
}

export default contact
