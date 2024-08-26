"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: "Battery Swap Station Partnership",
    description: "Partner with Humaya Power to establish battery swap stations that meet the growing demand for EV energy solutions. We provide comprehensive support, including high-quality batteries, infrastructure setup, and a lucrative revenue-sharing model. Empower your business to thrive in the electric mobility market.",
    image: "/swap-station.jpg"
  },
  {
    title: "Rental Batteries for EV Drivers",
    description: "Keep your journey uninterrupted with Humaya Power's flexible battery rental service. Available at our partnered swap stations, these rentals offer quick and easy swaps, allowing you to get back on the road in minutes. Choose from daily or monthly plans that fit your driving needs and budget.",
    image: "/rental-batteries.jpg"
  },
  {
    title: "Li-ion EV Batteries",
    description: "Drive with confidence using Humaya Power's Li-ion EV batteries, engineered for optimal performance, safety, and longevity. Our batteries are designed to maximize your vehicle's range while ensuring safety with advanced features. Sustainability is at the core, with recyclable materials and support for reuse.",
    image: "/ev-batteries.jpg"
  },
  {
    title: "Li-ion Storage Batteries",
    description: "Secure reliable energy for your home or business with Humaya Power's Li-ion storage batteries. These high-capacity batteries provide efficient energy storage, ensuring backup power during outages or peak demands. Scalable for various applications, they are ideal for both residential and commercial use.",
    image: "/storage-batteries.jpg"
  }
];

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const SolutionCard = ({ title, description, image, index }: SolutionCardProps) => (
  <motion.div 
    className="bg-white rounded-lg shadow-xl overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Image src={image} alt={title} width={400} height={400} className="w-full h-96 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-orange-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </motion.div>
);

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/StoreDot.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Innovative Energy Solutions
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering a sustainable future with cutting-edge technology
          </motion.p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
    <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-slate-100 dark:from-orange-900">
      <div className="absolute right-0 top-0 h-full w-full flex justify-end">
        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
          <span className="absolute w-16 h-16 -top-1 -right-1 bg-orange-500 rounded-md rotate-45" />
          <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-orange-400 rounded-md rotate-45" />
          <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-orange-300 rounded-md rotate-45" />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
          <span className="absolute w-16 h-16 -top-1 -right-1 bg-orange-500 rounded-md rotate-45" />
          <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-orange-400 rounded-md rotate-45" />
          <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-orange-300 rounded-md rotate-45" />
        </div>
      </div>
      <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
        <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-orange-950 dark:text-white">
          Ready to Power Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-600 from-20% via-orange-400 via-30% to-orange-600">Sustainable Energy</span> Solutions?
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Join us in creating a cleaner, more sustainable world. Together, we can make a difference.
        </p>
        <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
          <button className="outline-none h-12 px-5 rounded-xl bg-orange-600 text-white flex items-center hover:bg-orange-700 transition duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
