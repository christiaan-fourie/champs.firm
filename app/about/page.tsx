export default function About() {
  return (
    <div className='w-full min-h-[60vh] '>
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 -z-10'></div>
        <main className='text-xl text-center mx-24'>
          <h1 className='text-6xl font-light pt-32'>
            About Us
          </h1>
          <div className='w-1/6 h-[1px] bg-[#84be1f] my-4 mx-auto'></div>
          <p className="max-w- mx-auto">
          Champs firm is a consultancy company whose aim, and dream is to serve SMMEs at all positions in the African domain.          
          </p>
          <div className="flex flex-col lg:flex-row  justify-around p-12">
            <div className="hover:text-[#84be1f] border hover:border-[#84bd1f] rounded-full p-12 w-full lg:w-1/3 lg:hover:w-1/2 transition-all duration-700">
              <h2 className="text-4xl font-thin pb-6">Our Vision</h2>
              <p>
              To become Africa's consultancy powerhouse in various professional denominations.
              </p>
            </div>
            <div className="hover:text-[#84be1f] border hover:border-[#84bd1f] rounded-full p-12 w-full lg:w-1/3 lg:hover:w-1/2 transition-all duration-700">
              <h2 className="text-4xl font-thin pb-6">Our Mission</h2>
              <p>
              To build creative brands, and companies that meets world class client/customer satisfaction.
              </p>
            </div>
          </div>
        </main>
      </div>
  )
}
