"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function ContactPage() {
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
    <section className="bg-gray-100 dark:bg-gray-900 py-32 sm:py-36 lg:py-40 overflow-hidden min-h-screen flex items-center relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
      
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold mb-6"
            >
              Let's build an awesome project together!
            </motion.h1>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 space-y-4"
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
                className="w-full px-8 h-12 rounded-md flex items-center justify-center bg-emerald-700 text-white hover:bg-opacity-80 transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage