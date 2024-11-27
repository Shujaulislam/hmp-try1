"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaExchangeAlt,
} from "react-icons/fa";
import { nunito, syne } from "../font";
import Link from "next/link";


const fadeInUp = {
  initial: { opacity: 0, y: 20, transition: { duration: 0.6 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("form");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="/StoreDot.jpg?height=1080&width=1920"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1
            className={`${syne.className} text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white`}
          >
            Let&apos;s Shape the Future
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">
            Join us in our mission to create sustainable energy solutions. Reach
            out for collaborations, inquiries, or to learn more about our
            innovative technologies.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.h2
            className={`${syne.className} text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Connect With Us
          </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
            <div className="relative" style={{ perspective: "1000px" }}>
              <motion.div
                className="w-full transition-all duration-500 ease-in-out"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                {/* Contact Info */}
                <div
                  className={`absolute inset-0 ${
                    isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
                  } transition-opacity duration-500 ease-in-out`}
                >
                  <div className="bg-teal-600 text-white p-8 h-full text-center flex items-center justify-center">
                    <div className="space-y-10">
                      <h3 className={`${syne.className} text-2xl font-bold`}>
                        Contact Information
                      </h3>
                      <div className="flex items-center justify-center">
                        <FaMapMarkerAlt className="mb-7 mr-4 text-2xl" />
                        <p className="text-center text-2xl">
                          E-153, Gali No. 2, Chand Bagh, New Mustafabad, <br />
                          New Delhi, Delhi - 110094
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <FaPhoneAlt className="mr-4 text-2xl" />
                        <p className="text-2xl">(+91) 729-1000-560</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <Link href={`mailto:info@humayapower.in`}>
                          <FaEnvelope className=" text-2xl" />
                          <p className="-mt-[30px] ml-8 text-2xl">info@humayapower.in</p>
                        </Link>
                      </div>
                      <button
                        onClick={() => setIsFlipped(!isFlipped)}
                        className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                      >
                        Contact Us <FaExchangeAlt className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div
                  className={`${
                    isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"
                  } transition-opacity duration-500 ease-in-out`}
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="bg-white dark:bg-gray-800 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Your name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Your email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Your company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Company name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Budget Range
                          </label>
                          <input
                            type="text"
                            id="budget"
                            name="budget"
                            placeholder="In USD"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Type your message here..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                          required
                        ></textarea>
                      </div>
                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => setIsFlipped(!isFlipped)}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                          <FaExchangeAlt className="mr-2" /> Back
                        </button>
                        <motion.button
                          type="submit"
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Send Message
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
              >
                Thank you for your message! We&apos;ll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className={`${syne.className} text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Location
          </motion.h2>
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13997.934401935903!2d77.2676032!3d28.7050902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3aef2a99e3%3A0xc399e40fcdf3391b!2sHumaya%20Power!5e0!3m2!1sen!2sin!4v1725256686545!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
      {/* <section className="bg-gray-100 dark:bg-gray-900 py-10 px-4 min-w-max mx-auto">
        <h2 className={`${syne.className} text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white`}>
          Our Location
        </h2>
        <div className="max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13997.934401935903!2d77.2676032!3d28.7050902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3aef2a99e3%3A0xc399e40fcdf3391b!2sHumaya%20Power!5e0!3m2!1sen!2sin!4v1725256686545!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section> */}
    </div>
  );
}
