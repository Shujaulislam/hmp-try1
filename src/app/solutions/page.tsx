"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { syne } from '../font';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative text-white md:pt-32 md:pb-16 pb-10 pt-24">
        <div className="absolute bg-black/60 inset-0 z-0">
          <Image 
            src="/StoreDot.jpg" 
            alt="Hero Background"  
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <motion.div
          className="container mx-auto px-4 sm:px-10 text-center relative z-10"
          initial="initial"
          animate="animate"
        >
          <h1 className={`${syne.className} text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6`}>Explore Our Battery Solutions</h1>
          <p className="text-sm sm:text-base md:text-xl">Innovative and reliable power solutions for the future of mobility.</p>
        </motion.div>
      </section>

      {/* Products and Solutions Section */}
      <section className="pt-8 sm:pt-10 pb-0 md:py-24 px-4 sm:px-10 md:px-48 mb-20">
        {/* Battery Swap Station Partnership */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 lg:items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">Battery Swap Stations</h2>
            <p className="text-gray-700 mb-4">Partner with us to build a network of battery swap stations for efficient and quick battery exchanges.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">Partner with Us</button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/swap-station.jpeg"
              alt="Swap Station Image"
              width={400}
              height={300}
              className="rounded-lg object-fill max-w-full h-auto"
            />
          </div>
        </div>

        {/* Rental Batteries for EV Drivers */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-16 lg:items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">Rental Batteries for EV Drivers</h2>
            <p className="text-gray-700 mb-4">Affordable rental battery solutions for electric vehicle drivers, ensuring uninterrupted journeys.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">Explore Rentals</button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src="/battery-rental.jpeg"
              alt="Rental Battery Image"
              width={500}
              height={300}
              className="rounded-lg object-contain max-w-full h-auto"
            />
          </div>
        </div>

        {/* Li-ion EV Batteries */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 lg:items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">Li-ion EV Batteries</h2>
            <p className="text-gray-700 mb-4">High-performance Li-ion batteries for electric vehicles, designed for maximum efficiency and durability.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">Discover EV Batteries</button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/EVbattery.jpg"
              alt="EV Battery Image"
              width={500}
              height={300}
              className="rounded-lg object-contain max-w-full h-auto"
            />
          </div>
        </div>

        {/* Li-ion Storage Batteries */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-16 lg:items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">Li-ion Storage Batteries</h2>
            <p className="text-gray-700 mb-4">Reliable and sustainable energy storage solutions for both residential and commercial use.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">View Storage Options</button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src="/storage-battery.jpeg"
              alt="Storage Battery Image"
              width={500}
              height={300}
              className="rounded-lg object-contain max-w-full h-auto"
            />
          </div>
        </div>

        {/* Customized Batteries */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 lg:items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">Customized Battery Packs</h2>
            <p className="text-gray-700 mb-4">Customized battery packs with custom power, voltage, output, connection type, and cell type, for every need, from transport to personal use.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">Explore Rentals</button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="flex flex-col sm:flex-row gap-4">
              <Image
                src="/custom-battery-1.jpeg"
                alt="Custom Battery Image 1"
                width={250}
                height={250}
                className="rounded-lg object-cover max-w-full h-auto"
              />
              <Image
                src="/custom-battery-2.jpeg"
                alt="Custom Battery Image 2"
                width={250}
                height={250}
                className="rounded-lg object-cover max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Page;
