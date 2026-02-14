

'use client'

import Image from 'next/image'

export default function Beard_About() {
  return (
    <section className="bg-[#1C1C1E]  py-10  md:py-20 lg:pt-[110px] lg:pb-14">
      <div className="mx-auto container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[80px] items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold text-[#FFFFFFDE] mb-8 sm:mb-10">
              Beard Contest
            </h2>
            <p className="text-[#D9D9D9] text-sm sm:text-base md:text-xl leading-relaxed md:leading-[186%] text-justify max-w-full sm:max-w-[520px]">
              Hello to all the beard enthusiasts out there! We&apos;re thrilled to inform you about our current monthly online beard competition. Whether you&apos;re nurturing a full beard, an elegant mustache, or a unique facial hair creation – this online competition is just the thing for you! We warmly invite everyone who has invested time and dedication into growing and grooming their beards to showcase their impressive and stylish creations to like-minded individuals. At the end of each competition, a small surprise awaits the winner!

              
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative  w-full ">
            {/* First Image - Left */}
            <div className=" h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
              <Image
                src="/images/contest1.jpg"
                alt="Bearded man wearing bandana"
                width={1000}
                height={1000}
                className="object-cover rounded-xl w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
