'use client'

import Image from 'next/image'

export default function About_us() {
  return (
    <section className="bg-[#1C1C1E] px-6 py-20 lg:py-[110px]">
      <div className="mx-auto container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Centered */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold text-[#FFFFFFDE] mb-8">
              About
            </h2>

            <p className="text-[#D9D9D9] text-sm sm:text-base md:text-xl leading-relaxed md:leading-[186%] text-justify max-w-[520px]">
              The barber online community offered by Beard Friends is a great way for individuals to connect and share their passion for proper beard maintenance. The community allows users to find nearby barber shops, participate in beard contests, and shop for grooming items, all while connecting with other like-minded individuals. Whether you&apos;re a seasoned beard enthusiast or just starting out, the community provides a platform to learn, share, and grow together. With a supportive and knowledgeable community at your fingertips, maintaining a healthy and stylish beard has never been easier.
            </p>
          </div>

          {/* Right Image - Centered */}
          <div className="flex justify-center items-center">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/about2.jpg"
                alt="Bearded man wearing sunglasses"
                width={1000}
                height={1000}
                className="object-contain rounded-[12px]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}