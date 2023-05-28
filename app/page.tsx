export default function Home() {
  return (
    <>     
      <div className='w-full min-h-[60vh]'>
        <main className='text-xl text-center mx-24'>
          <h1 className='text-6xl font-light pt-32'>
            Welcome to <a href='#'>Champs Firm</a>
          </h1>
          <div className='w-1/6 h-[1px] bg-[#84be1f] my-4 mx-auto'></div>
          <p>
          We are so very excited to have you as a client and wanted to thank you from the bottom of our hearts for choosing us. Our mission is to deliver our clients the very best clients experience we can, so please know that we value your feedback.
          </p>
          <button className='bg-[#84be1f] my-4 rounded-md px-4 py-2'>Explore.</button>
        </main>
      </div>
     
    </>
  )
}
