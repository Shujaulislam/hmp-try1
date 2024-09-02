"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { montserrat, nunito, syne } from '../font';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ContactPage() {
  {/* Replace unescaped characters in FAQData */ }
  const FAQData = [
    {
      question: "What are some random questions to ask?",
      answer: "Some random questions could be: &apos;If you could have dinner with any historical figure, who would it be?&apos;, &apos;What&apos;s the most unusual thing you&apos;ve ever eaten?&apos;, or &apos;If you could instantly become an expert in one subject, what would it be?&apos;"
    },
    {
      question: "Do you include common questions?",
      answer: "Yes, we include a mix of common and unique questions to cater to a wide range of interests and curiosities."
    },
    {
      question: "Can I use this for 21 questions?",
      answer: "Absolutely! You can select any number of questions from our list to play games like 21 questions or to spark interesting conversations."
    },
    {
      question: "Are these questions for girls or for boys?",
      answer: "Our questions are designed to be inclusive and suitable for everyone, regardless of gender."
    },
    {
      question: "What do you wish you had more talent doing?",
      answer: "This is actually one of our questions! It&apos;s a great way to learn about someone&apos;s aspirations and interests."
    }
  ];


  function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b border-gray-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">{question}</span>
          <span className="text-2xl">{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
      </div>
    );
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
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
          <h1 className={`${syne.className} text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6`}>Let&apos;s Connect</h1>
          <p className="text-sm sm:text-base md:text-xl">Join us in shaping a sustainable energy future—reach out for collaboration and inquiries.</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-10 sm:py-20 px-5 sm:px-10 md:px-20 overflow-hidden">
        <div className="mx-auto lg:max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-20">
            {/* Address Section */}
            <div className="lg:w-1/2 text-left mb-10 lg:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${syne.className} text-3xl sm:text-4xl mt-6 text-gray-900 dark:text-white font-bold mb-8 text-center`}
              >
                Let&apos;s build an awesome project together!
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${nunito.className} text-sm sm:text-base md:text-lg text-gray-900 dark:text-white`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
                  <p><FaMapMarkerAlt className="inline-block mr-2 text-orange-500" /> E-153, Gali No. 2, Chand Bagh, New Mustafabad, New Delhi, Delhi, 110094</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
                  <p><FaPhoneAlt className="inline-block mr-2 text-orange-500" /> (+91) 729-1000-560</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <p><FaEnvelope className="inline-block mr-2 text-orange-500" /> info@humayapower.in</p>
                </div>
              </motion.div>
            </div>

            {/* Original Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white dark:bg-gray-800 p-6 sm:p-10 shadow-md rounded-lg w-full lg:w-1/2"
            >
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-full">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-full">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Budget Range</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="In USD"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-2 h-12 rounded-md flex items-center justify-center bg-orange-500 text-white hover:bg-opacity-80 transition-colors duration-300"
              >
                Send
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-gray-100 dark:bg-gray-900 py-10 px-4 min-w-max mx-auto">
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
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="bg-gray-100 dark:bg-gray-900 py-10 sm:py-20 px-4 min-w-max mx-auto">
        <h2 className={`${syne.className} text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white`}>
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-sm md:text-base text-center text-gray-600 dark:text-gray-300">
            Answered all frequently asked questions. Still confused? Feel free to contact us.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section> */}
    </>
  );
}
