export default function About() {
  return (
    <div className='w-full min-h-[60vh] '>
        <main className='text-xl text-center md:mx-24'>
          <h1 className='text-6xl font-extrabold pt-32 text-center bg-clip-text text-transparent bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70%'>
            Who we are.
          </h1>
          <div className='w-1/6 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4 mx-auto my-4 mx-auto'></div>
          <p className="max-w- mx-auto">
          Champs firm is a consultancy company whose aim, and dream is to serve SMMEs at all positions in the African domain.          
          </p>
          <div className="flex flex-col lg:flex-row  justify-around p-12">
            <div className="hover:text-[#84be1f] border hover:border-[#84bd1f] rounded-lg p-12 w-full lg:w-1/3 lg:hover:w-1/2 transition-all duration-700">
              <h2 className="text-4xl font-thin pb-6">Our Vision</h2>
              <p>
              To become Africa&apos;s consultancy powerhouse in various professional denominations.
              </p>
            </div>
            <div className="hover:text-[#84be1f] border hover:border-[#84bd1f] rounded-lg p-12 w-full lg:w-1/3 lg:hover:w-1/2 transition-all duration-700">
              <h2 className="text-4xl font-thin pb-6">Our Mission</h2>
              <p>
              To build creative brands, and companies that meets world class client/customer satisfaction.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-thin pb-6">Our Values</h2>
            <div className="flex flex-col w-full xl:flex-row gap-6 items-center justify-around p-12">
            {/* Our Values, Leadership, Exceptionalism, Accountability and Professionalism */}
              <div className="hover:text-[#84be1f] border hover:border-[#84bd1f] rounded-lg p-12 w-full lg:w-1/3 lg:hover:w-1/2 transition-all duration-700">                
                <h2 className="text-4xl font-thin pb-6">Leadership</h2>
                <p>
                We are leaders in our field, and we take on leadership roles in our community.
                </p>
              </div>
              <div className="hover:text-[#84be1f] border hover:border-[#84bd1f] rounded-lg p-12 w-full lg:w-1/3 lg:hover:w-1/2 transition-all duration-700">
                <h2 className="text-4xl font-thin pb-6">Exceptionalism</h2>
                <p>
                We are exceptional in our field, and we take on exceptional roles in our community.
                </p>
              </div>
              <div className="hover:text-[#84be1f] border hover:border-[#84bd1f] rounded-lg p-12 w-full lg:w-1/3 lg:hover:w-1/2 transition-all duration-700">
                <h2 className="text-4xl font-thin pb-6">Accountability</h2>
                <p>
                We are accountable in our field, and we take on accountability roles in our community.
                </p>
              </div>
              <div className="hover:text-[#84be1f] border hover:border-[#84bd1f] rounded-lg p-12 w-full lg:w-1/3 lg:hover:w-1/2 transition-all duration-700">
                <h2 className="text-4xl font-thin pb-6">Professionalism</h2>
                <p>
                We are professional in our field, and we take on professional roles in our community.
                </p>
              </div>
              

            </div>
          </div>
        </main>
      </div>
  )
}
