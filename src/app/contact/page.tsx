"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { syne } from '../font';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};


export default function ContactPage() {
  const FAQData = [
    {
      question: "What are some random questions to ask?",
      answer: "Some random questions could be: 'If you could have dinner with any historical figure, who would it be?', 'What's the most unusual thing you've ever eaten?', or 'If you could instantly become an expert in one subject, what would it be?'"
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
      answer: "This is actually one of our questions! It's a great way to learn about someone's aspirations and interests."
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
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }


  

  return (
    <>
    {/* Hero Section */}
    <section className="relative text-white pt-32 pb-16">
        <div className="absolute bg-black/60 inset-0 z-0">
          <Image
            src="/StoreDot.jpg"
            alt="Hero Background"
             fill
            className="object-cover"
            // width={2000}
            // height={2000}
            />
        </div>
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial="initial"
          animate="animate"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h1>
          <p className={`${syne.className} text-xl`}>Join us in shaping a sustainable energy future—reach out for collaboration and inquiries.</p>
        </motion.div>
      </section>
      
    <section className="bg-gray-100 dark:bg-gray-900 py-20 md:py-30 px-20 overflow-hidden flex items-center relative">
      {/* Background elements */}
      
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-20">
          <div className="lg:w-1/2 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" text-4xl md:text-5xl/tight mt-12 text-gray-900 dark:text-white font-bold mb-20"
            >
              Let's build an awesome project together!
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" text-2xl  text-gray-900 dark:text-white font-bold"
            >
              <p><FaMapMarkerAlt className="inline-block mr-2" />E-153, Gali No. 2, Chand Bagh, New Mustafabad, New Delhi, Delhi, 110094</p>
              <p><FaPhoneAlt className="inline-block mr-2" />(+91) 729-1000-560</p>
              <p><FaEnvelope className="inline-block mr-2" />info@humayapower.in</p>
            </motion.div>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-10 shadow-md rounded-lg"
          >
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company name"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Budget Range</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder="In USD"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-8 h-12 rounded-md flex items-center justify-center bg-orange-500 text-white hover:bg-opacity-80 transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>

{/*Google map iframe */}

     <section className="bg-gray-100 dark:bg-gray-900 py-20 px-4 min-w-max mx-auto">
      <h2 className={`${syne.className} text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white`}>
        Our Location
      </h2>
      <div className="max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13997.934401935903!2d77.2676032!3d28.7050902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3aef2a99e3%3A0xc399e40fcdf3391b!2sHumaya%20Power!5e0!3m2!1sen!2sin!4v1725256686545!5m2!1sen!2sin" 
      width="1200" 
      height="450" 
      style={{border:0}} 
      allowFullScreen={false} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
        
      </iframe>
      </div>
    </section>

    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-4 min-w-max mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-sm md:text-base text-center text-gray-600">
            Answered all frequently asked questions. Still confused? Feel free to contact us.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>
    </>
  )
}

// export default ContactPage