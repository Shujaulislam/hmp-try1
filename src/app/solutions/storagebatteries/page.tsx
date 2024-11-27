"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { syne } from '@/app/font';
import Link from 'next/link';
import { FaBolt, FaLeaf, FaClock, FaChartLine, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Page = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    { icon: <FaBolt />, title: "High Capacity", description: "Advanced Li-ion batteries with superior energy storage capacity" },
    { icon: <FaLeaf />, title: "Eco-Friendly", description: "Sustainable and environmentally conscious power solutions" },
    { icon: <FaClock />, title: "Long Lifespan", description: "Extended battery life with optimal performance" },
    { icon: <FaChartLine />, title: "Smart Monitoring", description: "Real-time battery health and performance tracking" },
  ];

  const faqs = [
    { question: "What is the lifespan of your storage batteries?", answer: "Our storage batteries are designed to last 10-15 years with proper maintenance and usage." },
    { question: "Are these batteries suitable for home use?", answer: "Yes, our batteries are perfect for residential applications, providing reliable backup power and energy optimization." },
    { question: "Do you offer installation services?", answer: "We provide professional installation services to ensure your battery system is set up correctly and efficiently." },
    { question: "What warranty do you offer?", answer: "We offer a 10-year warranty on all our storage battery products, covering manufacturing defects and performance." },
  ];

  const testimonials = [
    {
      quote: "Implementing Humaya Power's storage batteries has significantly reduced our energy costs and provided reliable backup power. The smart monitoring feature gives us peace of mind, knowing our system is always operating at peak efficiency.",
      name: "John Doe",
      title: "CEO, TechCorp"
    },
    {
      quote: "We've been using Humaya Power's storage batteries for our solar setup, and the results have been outstanding. The batteries' long lifespan and high capacity have greatly improved our energy independence.",
      name: "Jane Smith",
      title: "Homeowner"
    },
    {
      quote: "As a business owner, I appreciate the scalability of Humaya Power's storage solutions. They've grown with our needs, providing consistent and reliable power throughout our expansion.",
      name: "Mike Johnson",
      title: "Founder, GreenTech Solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative text-white md:pt-32 md:pb-16 pb-10 pt-24 h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/StoreDot.jpg" 
            alt="Hero Background"  
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>
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
            Storage Batteries
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Reliable and efficient energy storage solutions for your power needs
          </motion.p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-10 md:px-24 lg:px-48">
        <h2 className={`${syne.className} text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900`}>
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            >
              <div className="text-4xl text-orange-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <AnimatePresence>
                {activeFeature === index && (
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/storage-battery.jpeg"
                alt="Storage Battery"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`${syne.className} text-3xl sm:text-4xl font-bold mb-6 text-gray-900`}>
                Advanced Li-ion Storage Solutions
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our storage batteries are designed for maximum efficiency and reliability. Perfect for both residential and commercial applications, these batteries provide consistent power backup and help optimize energy consumption.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "High energy density and longer cycle life",
                  "Smart BMS for optimal performance",
                  "Safe and maintenance-free operation",
                  "Scalable capacity options"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-orange-500 mr-2">✓</span> {item}
                  </motion.li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="inline-block bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-10">
          <h2 className={`${syne.className} text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900`}>
            What Our Customers Say
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-gray-600 text-lg mb-6 italic">
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://placehold.co/40x40/png"
                    alt="Customer"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <FaChevronLeft className="text-orange-500" />
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            >
              <FaChevronRight className="text-orange-500" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-10">
          <h2 className={`${syne.className} text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900`}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  {activeFaq === index ? <FaChevronUp className="text-orange-500" /> : <FaChevronDown className="text-orange-500" />}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white px-4 pb-4 rounded-b-lg"
                    >
                      <p className="text-gray-600 mt-2 text-base leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-orange-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-10 text-center">
          <h2 className={`${syne.className} text-3xl sm:text-4xl font-bold mb-6`}>
            Ready to Optimize Your Energy Storage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our advanced storage batteries can benefit your home or business.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-orange-500 py-3 px-8 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;