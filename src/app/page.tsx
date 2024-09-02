"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaSolarPanel, FaBatteryFull, FaLeaf, FaCity } from 'react-icons/fa';
import { FcInTransit, FcBusinessman } from "react-icons/fc";
import { montserrat, syne } from './font';

const Page = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-32 sm:py-36 lg:py-40 md:h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background2.png')" }}
      >
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
          <div className="text-center flex flex-col items-center space-y-6 md:space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold max-w-4xl">
              Revitalising, <span className="mt-4 block md:inline"> the Energy</span>
            </h1>
            <p className="text-gray-300 text-center max-w-xl text-lg md:text-xl">
              Humaya Power leads the charge in transforming the energy landscape with high performance lithium-ion batteries and flexible energy solutions for a greener future.
            </p>
            <div className="flex justify-center">
              <Link
                href="/about"
                className="border-2 border-orange-600 px-6 py-2 md:px-8 md:py-3 rounded-lg flex items-center gap-x-2 md:gap-x-3 bg-white/20 text-white hover:bg-orange-400/70 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay Gradient */}
      {!isNavbarOpen && (
        <div className="absolute inset-0 top-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>
      )}

      {/* Sustainability Section */}
      <section className="bg-slate-900 w-full py-20 md:py-32 px-5 md:px-12 lg:px-28">
        <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
          <div className="text-center flex flex-col items-center space-y-8 md:space-y-10">
            <h2 className={`${syne.className} text-4xl md:text-5xl text-white font-bold`}>
              Energize Your World, Sustainably
            </h2>
             <p className="text-gray-300 text-center max-w-2xl text-lg md:text-xl font-syne">
              At Humaya Power, we don&apos;t just offer energy solutions; we redefine them. Our commitment is to revolutionize the sustainable energy landscape by making high-quality, eco-friendly energy options accessible and affordable for everyone.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-b from-white to-gray-100 w-full py-20 px-5 md:px-12 lg:px-28">
        <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
          <div className="text-center flex flex-col items-center space-y-8 md:space-y-10">
            <h2 className={`${syne.className} text-4xl md:text-5xl font-bold`}
            >
              Why Choose Humaya Power?
            </h2>
            <p className="text-black text-center max-w-3xl text-lg md:text-xl font-syne">
              Our unique approach lies in our innovative integration of technology and user-centric services. We extend the lifecycle of Li-ion batteries, transforming the way energy is consumed and conserved. This not only supports environmental sustainability but also propels us towards a greener future together with our community.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gradient-to-t from-white to-gray-100 py-20 px-5 md:px-12 lg:px-28">
        <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
          <div className="text-center flex flex-col items-center space-y-8 md:space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FcInTransit className="text-5xl text-center text-orange-500 mb-4 mx-auto" />,
                  title: "1,000,000+ KM",
                  description: "Distance driven using our recycled Li-ion batteries.",
                },
                {
                  icon: <FaCity className="text-5xl text-orange-500 mb-4 mx-auto" />,
                  title: "10+ Cities",
                  description: "Our reach has expanded across numerous cities, bringing sustainable energy solutions to a wider audience.",
                },
                {
                  icon: <FcBusinessman className="text-5xl text-orange-500 mb-4 mx-auto" />,
                  title: "5 Partnered Swap Stations",
                  description: "Established across India, enhancing accessibility to energy-efficient options.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  {feature.icon}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full pt-20 px-5 md:px-12 lg:px-28">
        <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
          <div className="text-center flex flex-col items-center space-y-8 md:space-y-10">
            <p className="text-black text-center max-w-4xl font-light text-lg md:text-2xl">
            Get Started with Humaya Power Ready to take a step towards a cleaner, greener planet? Explore our range of products and services designed to cater to your energy needs. Whether you&apos;re looking to buy, rent, or simply learn more about sustainable energy, Humaya Power is your partner in this journey.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
                <Link href="/contact">
                  <button className="outline-none h-12 px-5 rounded-xl bg-orange-600 text-white flex items-center hover:bg-orange-700 transition duration-300">
                    Contact Us Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
