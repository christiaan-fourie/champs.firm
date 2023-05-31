
export default function Home() {
  return (
    <>          
      <div className='w-full min-h-[60vh] '>
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 -z-10'></div>
        <main className='text-xl text-center mx-24'>
          <h1 className='text-6xl font-extrabold pt-32 text-center bg-clip-text text-transparent bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70%'>
            Welcome to Champs Firm.
          </h1>
          <div className='w-1/6 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4 mx-auto'></div>
          <p>
          We are so very excited to have you as a client and wanted to thank you from the bottom of our hearts for choosing us. Our mission is to deliver our clients the very best clients experience we can, so please know that we value your feedback.
          </p>
          <button className='bg-[#84be1f] my-4 rounded-md px-4 py-2'>Explore.</button>
        </main>
      </div>
     
    </>
  )
}
