"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { syne } from '@/app/font';
import { FaBolt, FaExchangeAlt, FaMobileAlt, FaChevronDown } from 'react-icons/fa';

const Page = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    { icon: <FaBolt />, title: "High Capacity", description: "Advanced Li-ion batteries with optimal range for daily commutes" },
    { icon: <FaExchangeAlt />, title: "Quick Swap", description: "Seamless battery exchange at our swap stations" },
    { icon: <FaMobileAlt />, title: "Smart Monitoring", description: "Real-time battery health and performance tracking" },
  ];

  const howItWorks = [
    { title: "Sign Up", description: "Register and choose your rental plan" },
    { title: "Get Your Battery", description: "Pick up your first battery from our station" },
    { title: "Use & Monitor", description: "Track battery performance via our app" },
    { title: "Swap Anytime", description: "Exchange at any of our swap stations" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/battery-rental.jpeg" 
            alt="Rental Batteries Hero"  
            fill
            className="object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>  {/*div for dark hue effect on banner image */}
        </div>
        <motion.div
          className="container mx-auto px-4 sm:px-10 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className={`${syne.className} text-4xl sm:text-5xl md:text-7xl font-bold mb-6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Power on Demand
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Flexible and affordable battery rental solutions for your electric vehicle needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="#rental-plan" className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors">
              Explore Rental Plans
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="text-white text-3xl" />
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-10 md:px-24 lg:px-48">
        {/* Monthly Rental Plan */}
        <motion.div 
          id="rental-plan"
          className="flex flex-col lg:flex-row items-center gap-12 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-orange-600 mb-6">Monthly Rental Plan</h2>
            <p className="text-gray-800 text-xl mb-6 leading-relaxed max-w-2xl">Our most popular rental option with complete flexibility and support.</p>
            <ul className="text-gray-800 mb-8 text-left text-lg space-y-4">
              {['24/7 Technical Support', 'Free Battery Health Monitoring', 'Unlimited Swap Access', 'No Long-term Commitment'].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-orange-500 mr-2">✓</span> {item}
                </motion.li>
              ))}
            </ul>
            <p className="text-4xl font-bold text-orange-600 mb-8">₹3,000/month</p>
            <Link href="/contact" className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600 transition-colors text-lg font-medium">Start Renting</Link>
          </div>
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/battery-rental.jpeg"
              alt="Monthly Rental Plan"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Battery Features */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-orange-600 mb-12 text-center">Battery Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                <div className="text-4xl text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 text-lg leading-relaxed"
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-orange-600 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-b from-orange-500 to-orange-700 p-16 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto leading-relaxed">Join our growing network of satisfied EV drivers using rental batteries</p>
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
};

export default Page;