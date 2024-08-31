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

export default function AboutUs() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-16">
        <div className="absolute bg-black/60 inset-0 z-0">
          <Image
            src="/StoreDot.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial="initial"
          animate="animate"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">We Are Humaya Power</h1>
          <p className="text-xl">Powering a sustainable future with innovative energy solutions</p>
        </motion.div>
      </section>
      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto pl-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image src="/Background2.png" alt="Our Journey" width={500} height={300} className="rounded-lg shadow-xl" />
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-700 mb-6 text-lg font-light leading-8">
                Our journey began with a vision to revolutionise the way energy resources are used and preserved. Witnessing the wasteful crushing and recycling processes of damaged batteries, our founders were driven to create a more sustainable solution.
              </p>
              <p className="text-gray-700 text-lg">
                This inspiration led to the development of innovative practices for re-manufacturing batteries, ensuring the complete utilisation of resources and significantly reducing environmental impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
          <div className="flex md:flex-1">
            <Image src="/Background2.png" alt="working on housing" width={1300} height={900} className="w-full md:h-full object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 lg:w-[54%] space-y-12 text-gray-700 dark:text-gray-300">
            <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
              We help drive your business forward faster
            </h1>
            <p>
              Humaya Power stands at the forefront of environmental sustainability by maximising the lifecycle of Li-ion batteries. Our efforts extend the usability of these batteries, making them a safer and more cost-effective alternative to lead-acid batteries. This not only conserves resources but also offers substantial benefits to communities by providing more affordable energy solutions.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-gray-900 dark:text-white">Our mission</h2>
                <p>
                  To innovate and deliver affordable energy solutions that enhance global sustainability and improve community well-being.
                </p>
              </div>
              <div className="space-y-6 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-gray-900 dark:text-white">Our vision</h2>
                <p>
                  To lead global energy innovation, making sustainable solutions accessible and affordable, and empowering a greener, more equitable future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Our Impact</h1>
            <p className="text-gray-700 dark:text-gray-300">
              Driving Change, One Battery at a Time. Humaya Power stands at the forefront of environmental sustainability by maximising the lifecycle of Li-ion batteries. Our efforts extend the usability of these batteries, making them a safer and more cost-effective alternative to lead-acid batteries.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-5 md:p-6 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-4">
              <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                <span className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </span>
                <h2 className="font-bold text-2xl">1 Million+ KM</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Distance driven using our recycled Li-ion batteries.
              </p>
            </div>
            <div className="p-5 md:p-6 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-4">
              <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                <span className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <h2 className="font-syne font-bold text-2xl">10+ Cities</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Our reach has expanded across numerous cities, bringing sustainable energy solutions to a wider audience.
              </p>
            </div>
            <div className="p-5 md:p-6 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-4">
              <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                <span className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </span>
                <h2 className="font-bold text-2xl">5 Partnered Swap Stations</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Established across India, enhancing accessibility to energy-efficient options.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Future Directions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`${syne.className} text-4xl font-bold mb-8 text-center text-gray-800`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Future Directions
          </motion.h2>
          <motion.h3
            className="text-2xl font-semibold mb-6 text-center text-orange-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expanding Horizons
          </motion.h3>
          <motion.p
            className="text-gray-700 text-lg text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Looking ahead, Humaya Power is committed to expanding its innovative approach to more cities and communities. We are continuously developing new projects and technologies that will further our impact, driving the transition to sustainable energy solutions globally. Our goal is not only to enhance our product offerings but also to inspire a movement towards more responsible energy consumption and production.
          </motion.p>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Together, We Empower
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image src="/community-image.jpg" alt="Community Engagement" width={500} height={300} className="rounded-lg shadow-xl" />
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-700 text-lg">
                Humaya Power is more than a company; we are a community of innovators, environmental advocates, and forward-thinkers. We engage deeply with our customers and communities to educate and collaborate on sustainable practices. Our partnerships with swap stations and local stakeholders are vital in driving the adoption of greener technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
    <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-slate-100 dark:from-orange-900">
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
</main>
  );
}