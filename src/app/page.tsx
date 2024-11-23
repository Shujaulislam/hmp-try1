'use client'


import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FaSolarPanel, FaBatteryFull, FaLeaf, FaCity } from 'react-icons/fa'
import { FcInTransit, FcBusinessman } from "react-icons/fc"
import { montserrat, syne } from './font'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { EffectLink } from '@/components/EffectLink'





export default function Component() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div>
      <section className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/background2.png')" }}>
          <div className="absolute inset-0 bg-black opacity-50" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-10">
            <h1 className={`${montserrat.className} text-6xl md:text-8xl text-white font-bold mb-4`}>
              Revitalising
            </h1>
            <h2 className={`${montserrat.className} text-4xl md:text-6xl text-white font-bold mb-8`}>
              the <span className="text-orange-500 underline">Energy</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl md:text-2xl mb-12">
              Humaya Power leads the charge in transforming the energy landscape with high performance lithium-ion batteries and flexible energy solutions for a greener future.
            </p>
            <Button
              // asChild
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </section>
      

      
        <section className="min-h-screen bg-gradient-to-b from-slate-900 to-orange-900 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`${syne.className} text-5xl md:text-7xl text-white font-bold text-center mb-12`}
            >
              Energize Your World, Sustainably
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-300 text-center max-w-4xl mx-auto text-xl md:text-2xl mb-16"
            >
              At Humaya Power, we don&apos;t just offer energy solutions; we redefine them. Our commitment is to revolutionize the sustainable energy landscape by making high-quality, eco-friendly energy options accessible and affordable for everyone.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <FaSolarPanel className="text-6xl text-orange-400" />, title: "Solar Power" },
                { icon: <FaBatteryFull className="text-6xl text-green-400" />, title: "Energy Storage" },
                { icon: <FaLeaf className="text-6xl text-teal-400" />, title: "Eco-Friendly" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                >
                  {item.icon}
                  <h3 className="text-2xl font-bold text-white mt-4">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        <section className="min-h-screen bg-gradient-to-b from-orange-900 to-slate-900 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`${syne.className} text-5xl md:text-7xl text-white font-bold text-center mb-12`}
            >
              Why Choose Humaya Power?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-300 text-center max-w-4xl mx-auto text-xl md:text-2xl mb-16"
            >
              Our unique approach lies in our innovative integration of technology and user-centric services. We extend the lifecycle of Li-ion batteries, transforming the way energy is consumed and conserved.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FcInTransit className="text-6xl" />,
                  title: "1,000,000+ KM",
                  description: "Distance driven using our recycled Li-ion batteries.",
                },
                {
                  icon: <FaCity className="text-6xl text-blue-400" />,
                  title: "10+ Cities",
                  description: "Our reach has expanded across numerous cities, bringing sustainable energy solutions to a wider audience.",
                },
                {
                  icon: <FcBusinessman className="text-6xl" />,
                  title: "5 Partnered Swap Stations",
                  description: "Established across India, enhancing accessibility to energy-efficient options.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 p-6 h-full flex flex-col justify-between">
                    <div className="text-center mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-center">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      

        <section className="min-h-screen bg-gradient-to-b from-slate-900 to-orange-900 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`${syne.className} text-5xl md:text-7xl text-white font-bold text-center mb-12`}
            >
              Get Started with Humaya Power
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-300 text-center max-w-4xl mx-auto text-xl md:text-2xl mb-16"
            >
              Ready to take a step towards a cleaner, greener planet? Explore our range of products and services designed to cater to your energy needs. Whether you&rsquo;re looking to buy, rent, or simply learn more about sustainable energy, Humaya Power is your partner in this journey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Button
                // asChild
                className="bg-black text-orange-600 hover:bg-orange-100 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/solutions">Explore Our Products</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      

        <section className="min-h-screen bg-gradient-to-b from-orange-900 to-slate-900 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`${syne.className} text-5xl md:text-7xl text-white font-bold text-center mb-12`}
            >
              Ready to Power Your Future?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-300 text-center max-w-4xl mx-auto text-xl md:text-2xl mb-16"
            >
              Join us in creating a cleaner, more sustainable world. Together, we can make a difference.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Button
                // asChild
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
              >
                <EffectLink href="/contact">Contact Us Today</EffectLink>
              </Button>
            </motion.div>
          </div>
        </section>
      

      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-orange-600 origin-left z-50"
        style={{ scaleX }}
      />
    </div>
  )
  
}
