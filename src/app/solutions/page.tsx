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
      {/* Header */}
       {/* Hero Section */}
       <section className="relative text-white md:pt-32 md:pb-16 pb-10 pt-24">
        <div className="absolute bg-black/60 inset-0 z-0">
          <Image src="/StoreDot.jpg" 
          alt="Hero Background"  
          fill
          className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <motion.div
          className="container mx-auto px-10 text-center relative z-10"
          initial="initial"
          animate="animate"
        >
          <h1 className={`${syne.className} text-4xl md:text-6xl font-bold mb-6`}>Explore Our Battery Solutions</h1>
          <p className="text-base md:text-xl">Innovative and reliable power solutions for the future of mobility.</p>
        </motion.div>
      </section>

      {/* Products and Solutions Section */}
      <section className="pt-10 pb-0 md:py-24 px-10 md:px-32 *:mb-20 *:*:mx-10 last:-mb-10">
        {/* Battery Swap Station Partnership */}
        <div className="flex flex-col lg:flex-row items-center gap-8 ">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-orange-600 mb-4">Battery Swap Station Partnership</h2>
            <p className="text-gray-700 mb-4">Partner with us to build a network of battery swap stations for efficient and quick battery exchanges.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">Partner with Us</button>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Animated Infographic Placeholder */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <Image
              src="/swap-station.jpeg"
              alt='swap-station image'
              width={256}
              height={256}
              className="object-contain"
               />
            </div>
          </div>
        </div>

        {/* Rental Batteries for EV Drivers */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-orange-600 mb-4">Rental Batteries for EV Drivers</h2>
            <p className="text-gray-700 mb-4">Affordable rental battery solutions for electric vehicle drivers, ensuring uninterrupted journeys.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">Explore Rentals</button>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Product Slider Placeholder */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <Image
            src="/battery-rental.jpeg"
            alt="rental-battery image"
            width={256}
            height={256}
            className="object-contain"
        />
            </div>
          </div>
        </div>

        {/* Li-ion EV Batteries */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-orange-600 mb-4">Li-ion EV Batteries</h2>
            <p className="text-gray-700 mb-4">High-performance Li-ion batteries for electric vehicles, designed for maximum efficiency and durability.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">Discover EV Batteries</button>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Animated Icons Placeholder */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <Image
            src="/EVbattery.png"
            alt="ev battery image"
            width={256}
            height={256}
            className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Li-ion Storage Batteries */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-orange-600 mb-4">Li-ion Storage Batteries</h2>
            <p className="text-gray-700 mb-4">Reliable and sustainable energy storage solutions for both residential and commercial use.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">View Storage Options</button>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Grid Layout for Images and Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
              <Image
            src="/storage-battery.jpeg"
            alt="rental-battery image"
            width={256}
            height={256}
            className="object-contain"
              />
            </div>
            </div>
          </div>
        </div>

        {/* Customised Batteries*/}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-orange-600 mb-4">Customised Battery Packs</h2>
            <p className="text-gray-700 mb-4">Customised battery packs with minute with custom power, voltage, output , connection type and cell type, for your every kind of need be it transport or personal.</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">Explore Rentals</button>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Product Slider Placeholder */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <Image
            src="/custom-battery-1.jpeg"
            alt="rental-battery image"
            width={256}
            height={256}
            className="object-contain"
              />
              <Image
            src="/custom-battery-2.jpeg"
            alt="rental-battery image"
            width={256}
            height={256}
            className="object-contain"
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