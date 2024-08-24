"use client"
import Link from 'next/link'


const Page = () => {

  return (
    <section className="bg-gray-900 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] flex items-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.png')" }}>
      <div className="absolute inset-0" /> {/* Dark overlay */}
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
        <div className="text-center flex flex-col items-center space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-white font-bold max-w-4xl capitalize">
            Revitalising the Energy
          </h1>
            <p className="text-gray-300 text-center max-w-xl text-xl">
              Humaya Power leads the charge in transforming the energy landscape with high performance lithium-ion batteries and flexible energy solutions for a greener future.
            </p>
          <div className="flex justify-center">
            <Link href="/about" className="border-2 border-orange-600 px-8 py-2 h-14 rounded-lg flex items-center gap-x-3  bg-white-100/20 text-white hover:bg-orange-400/70 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
};



export default Page;