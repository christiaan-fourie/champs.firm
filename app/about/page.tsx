import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-12 md:p-16">        
        {/* Next Image */}
        <div className="h-[60vh] w-full lg:w-1/2 fixed -z-30 -left-16 -translate-x-64 lg:-translate-x-0">
          <Image
            src="/assets/backgrounds/lionbackground.jpg"
            alt="Hero Image"
            layout="fill"
            className="object-cover object-center invert rounded-full"
          />
        </div> 
        <div className="text-right lg:w-1/2 ml-auto mt-8">
          <div className=" text-white text-6xl lg:text-right font-extrabold text-center">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70%">
              Our Vision
            </h1>
          </div>
          {/* A line */}
          
          <div className="w-1/2 h-[2px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-10 py-2/1 mx-auto lg:mr-0"></div>
          <p className="glass p-4 rounded">
          To become Africa&apos;s consultancy powerhouse in various
            professional denominations.
          We envision a future where African SMMEs are at the forefront of economic growth and innovation. By supporting and nurturing these businesses, we aim to contribute to the overall development and prosperity of the African continent.
          </p>
        </div>
        {/* A Call to action button */}
        <div className="flex justify-center lg:justify-end">
          <Link href='/contact' className="bg-[#84be1f] hover:bg-[#1b6ec5] text-white font-bold py-2 px-4 rounded-full mt-12 transition-all duration-300">
            Contact Us
          </Link>
        </div>

        <div className="text-center lg:text-right lg:w-1/2 md:ml-auto mt-8">
          <div className=" text-white text-6xl lg:text-right font-extrabold text-center">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70%">
              And Mission
            </h1>
          </div>
          {/* A line */}          
          <div className="w-1/2 h-[2px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-10 py-2/1 mx-auto lg:mr-0"></div>
          <p>
            Our mission is to provide comprehensive solutions and tailored support to SMMEs, enabling them to overcome challenges and unlock their full potential. We believe that by offering our expertise, guidance, and resources, we can make a significant impact on the growth and success of SMMEs throughout Africa.
          </p>
        </div>

        {/* Our Values */}
        <div className="text-center lg:text-right lg:w-1/2 md:ml-auto mt-8">
          <div className=" text-white text-6xl lg:text-right font-extrabold text-center">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70%">
              Our Values
            </h1>
          </div>  
          {/* A line */}
          <div className="w-1/2 h-[2px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-10 py-2/1 mx-auto lg:mr-0"></div>
          <p>
            We are committed to providing our clients with the highest quality of service and support. Our four values are the foundation and pillars of our business and the driving force behind everything we do.
          </p>
          {/* Leadership
              Exceptionalism
              Accountability
              Professionalism 
          */}
          {/* 4 Responsive cards that flex to a columb on small devices and two columbs on med devices */}
          <div className="flex flex-col gap-4 mt-8">
            <div className="glass p-4 rounded ">
              <h3 className="text-2xl font-bold">Leadership</h3>
              <p>
                We are committed to providing our clients with the highest quality of service and support. Our four values are the foundation and pillars of our business and the driving force behind everything we do.
              </p>
            </div>
            <div className="glass p-4 rounded">
              <h3 className="text-2xl font-bold">Exceptionalism</h3>
              <p>
                We are committed to providing our clients with the highest quality of service and support. Our four values are the foundation and pillars of our business and the driving force behind everything we do.
              </p>
            </div>
            <div className="glass p-4 rounded">
              <h3 className="text-2xl font-bold">Accountability</h3>
              <p>
                We are committed to providing our clients with the highest quality of service and support. Our four values are the foundation and pillars of our business and the driving force behind everything we do.
              </p>
            </div>
            <div className="glass p-4 rounded">
              <h3 className="text-2xl font-bold">Professionalism</h3>
              <p>
                We are committed to providing our clients with the highest quality of service and support. Our four values are the foundation and pillars of our business and the driving force behind everything we do.
              </p>
            </div>
          </div>

          
        </div>





        
      </div>
  );
}