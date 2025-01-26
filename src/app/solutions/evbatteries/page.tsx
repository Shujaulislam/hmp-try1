"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { syne } from '@/app/font';
import Link from 'next/link';
import { FaBolt, FaLeaf, FaClock, FaShieldAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';


const features = [
  { icon: <FaBolt />, title: "High Capacity", desc: "5000mAh capacity for extended range" },
  { icon: <FaLeaf />, title: "Eco-Friendly", desc: "Sustainable and recyclable materials" },
  { icon: <FaClock />, title: "Fast Charging", desc: "0-80% charge in just 30 minutes" },
  { icon: <FaShieldAlt />, title: "Safety First", desc: "Advanced BMS protection system" }
];

const specifications = [
  { title: "Battery Type", value: "Lithium-ion NMC" },
  { title: "Voltage Range", value: "48V - 72V" },
  { title: "Cycle Life", value: "2000+ cycles" },
  { title: "Warranty", value: "3 years manufacturer warranty" }
];


function Page() {
  const [activeSpec, setActiveSpec] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/EVbattery.jpg" 
            alt="EV Battery"  
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>
        <motion.div 
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`${syne.className} text-5xl md:text-7xl font-bold mb-6 leading-tight`}>
            Power Your <br />
            <span className="text-orange-500">Electric Future</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Experience unparalleled performance with our state-of-the-art EV batteries, engineered for the road ahead.
          </p>
          <Link href="#features" className="bg-orange-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-orange-600 transition-colors text-lg">
            Discover More
          </Link>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="text-white text-3xl" />
        </motion.div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className={`${syne.className} text-4xl md:text-5xl font-bold mb-12 text-center`}>
            Cutting-Edge Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl text-orange-500 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/EVbattery.jpg"
                alt="EV Battery Details"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`${syne.className} text-4xl md:text-5xl font-bold mb-8`}>Technical Specifications</h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div 
                    key={index}
                    className="border border-gray-500 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
                      onClick={() => setActiveSpec(activeSpec === index ? null : index)}
                    >
                      <span className="font-semibold text-lg">{spec.title}</span>
                      {activeSpec === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <AnimatePresence>
                      {activeSpec === index && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-gray-100">
                            <p className="text-gray-600 text-lg">{spec.value}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 px-4 bg-gradient-to-b from-orange-600 to-orange-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${syne.className} text-4xl md:text-5xl font-bold mb-6`}>Ready to Power Your EV?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the future of electric mobility with our high-performance batteries. Take the first step towards a greener, more efficient future.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link href="/contact" className="bg-white text-orange-500 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
      {/* new CTA */}
      <section className="py-24 px-4 sm:px-10 md:px-24 lg:px-48">
        <motion.div 
          className="text-center bg-gradient-to-b from-orange-500 to-orange-700 p-16 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          <h2 className={`${syne.className}text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6`}>Ready to Power Your EV?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto leading-relaxed">Experience the future of electric mobility with our high-performance batteries. Take the first step towards a greener, more efficient future.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            <Link href="/contact" className="bg-white text-orange-600 py-4 px-10 rounded-full hover:bg-gray-100 transition-colors inline-block text-lg font-medium">
              Contact Us Now
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Page;