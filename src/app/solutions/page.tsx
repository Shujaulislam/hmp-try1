"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Battery, Zap, Cog, Building2 } from "lucide-react"

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.6 }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const solutionCategories = [
  { id: "ev-batteries", name: "EV Batteries", icon: Battery },
  { id: "swap-stations", name: "Swap Stations", icon: Zap },
  { id: "energy-storage", name: "Energy Storage", icon: Building2 },
  { id: "custom-solutions", name: "Custom Solutions", icon: Cog },
]

const solutions = [
  {
    id: "ev-batteries",
    name: "EV Batteries",
    description: "High-performance Li-ion batteries for electric vehicles.",
    features: ["Long-lasting", "Fast-charging", "Lightweight"],
    price: "₹30,000",
    image: "/EVbattery.jpg",
    caseStudy: {
      company: "GreenRide Cabs",
      quote: "Switching to these batteries increased our fleet's range by 30%.",
    },
  },
  {
    id: "swap-stations",
    name: "Battery Swap Stations",
    description: "Efficient battery swap stations for quick exchanges.",
    features: ["2-minute swap time", "24/7 operation", "Smart scheduling"],
    price: "₹2 Lakh to ₹8 Lakh per station",
    image: "/swap-station.jpeg",
    caseStudy: {
      company: "MetroCharge Network",
      quote: "Our customers love the convenience of 2-minute battery swaps.",
    },
  },
  {
    id: "energy-storage",
    name: "Energy Storage Solutions",
    description: "Reliable storage for residential and commercial use.",
    features: ["Scalable", "Grid-compatible", "Long cycle life"],
    price: "₹12,000",
    image: "/storage-battery.jpeg",
    caseStudy: {
      company: "SunPeak Solar Farms",
      quote: "These storage solutions helped us achieve 99.9% grid reliability.",
    },
  },
  {
    id: "custom-solutions",
    name: "Custom Battery Packs",
    description: "Tailored battery solutions for unique applications.",
    features: ["Customized specs", "Diverse applications", "Expert consultation"],
    price: "₹2,000 - ₹50,000 per pack",
    image: "/custom-battery-1.jpeg",
    secondaryImage: "/custom-battery-2.jpeg",
    caseStudy: {
      company: "AquaDrone Systems",
      quote: "The custom batteries doubled our drones' operational time.",
    },
  },
]

const Page = () => {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/StoreDot.jpg"
            alt="Innovative Battery Solutions"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powering the Future with Innovative Battery Solutions
            </h1>
            <p className="text-xl mb-8">
              Discover our range of high-performance batteries and energy solutions for every need.
            </p>
            <Link
              href="#solutions"
              className="inline-flex items-center bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Explore Solutions
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4 py-4">
            {solutionCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveSolution(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSolution === category.id ? "bg-orange-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <category.icon className="mr-2 h-5 w-5" />
                {category.name}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* In-Depth Solution Sections */}
      {solutions.map((solution) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`relative py-16 md:py-24 ${solution.id === activeSolution ? "" : "hidden"} overflow-hidden`}
        >
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100/20 rounded-full mix-blend-multiply animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/20 rounded-full mix-blend-multiply animate-float-slower"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-slate-100/30 rounded-full mix-blend-multiply animate-float"></div>
          
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  {solution.name}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {solution.description}
                </motion.p>
                <motion.ul variants={fadeInUp} className="mb-6 space-y-2">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Zap className="text-orange-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </motion.ul>
                <motion.p variants={fadeInUp} className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mb-6">
                  {solution.price}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-orange-500 text-white py-2 px-4 rounded-full font-medium hover:bg-orange-600 transition-colors"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </motion.div>
              </div>
              <div className="lg:w-1/2">
                {solution.id === "custom-solutions" ? (
                  <div className="space-y-4">
                    <div className="relative h-64">
                      {solution.image && (
                        <Image 
                          src={solution.image} 
                          alt={`${solution.name} - Primary`} 
                          fill 
                          className="object-cover rounded-lg" 
                        />
                      )}
                    </div>
                    <div className="relative h-64">
                      {solution.secondaryImage && (
                        <Image 
                          src={solution.secondaryImage} 
                          alt={`${solution.name} - Secondary`} 
                          fill 
                          className="object-cover rounded-lg" 
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-96">
                    {solution.image && (
                      <Image 
                        src={solution.image} 
                        alt={solution.name} 
                        fill 
                        className="object-cover rounded-lg" 
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <motion.div variants={fadeInUp} className="mt-16 bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Customer Success Story</h3>
              <blockquote className="text-gray-700 italic mb-4">&ldquo;{solution.caseStudy.quote}&rdquo;</blockquote>
              <p className="font-medium">- {solution.caseStudy.company}</p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Solution Grid */}
      <section id="solutions" className="relative py-16 md:py-24 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 right-[10%] w-28 h-28 bg-orange-100/20 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-20 left-[15%] w-36 h-36 bg-blue-100/20 rounded-full mix-blend-multiply animate-float-slow"></div>
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/40 via-white to-orange-50/30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={solution.image || "/placeholder.svg"} alt={solution.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{solution.name}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <p className="text-orange-500 font-bold mb-4">{solution.price}</p>
                  <Link
                    href={`#${solution.id}`}
                    className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
                    onClick={() => setActiveSolution(solution.id)}
                  >
                    Learn More
                    <ArrowRight className="inline ml-1" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 left-[20%] w-32 h-32 bg-orange-100/20 rounded-full mix-blend-multiply animate-float-slow"></div>
        <div className="absolute bottom-10 right-[20%] w-40 h-40 bg-blue-100/20 rounded-full mix-blend-multiply animate-float-slower"></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative">
          <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-300 dark:from-orange-900">
            <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-orange-950 dark:text-white"
              >
                Ready to Power Your Future with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-600 from-20% via-orange-400 via-30% to-orange-600">
                  Sustainable Energy
                </span>{" "}
                Solutions?
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-700 dark:text-gray-300 text-xl"
              >
                Contact us today to discuss your energy needs and find the perfect battery solution for your application.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="mx-auto max-w-md sm:max-w-xl flex justify-center"
              >
                <Link
                  href="/contact"
                  className="outline-none h-12 px-5 rounded-xl bg-orange-600 text-white flex items-center hover:bg-orange-700 transition duration-300"
                >
                  Contact Us Today
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
