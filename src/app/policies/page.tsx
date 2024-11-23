import React from 'react'
import { syne } from '../font'


export default function Policies() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className={`${syne.className} text-4xl font-bold mb-8 text-gray-900`}>Policies</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="mb-4">Humaya Power is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
            <h3 className="text-xl font-semibold mb-2">Information Collection and Use</h3>
            <p className="mb-4">We collect personal information such as name, email address, and phone number when you interact with our website or purchase our products. This information is used to process orders, provide customer support, and improve our services.</p>
            <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
            <p className="mb-4">We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.</p>
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
            <p className="mb-4">Our website uses cookies to enhance your browsing experience and provide personalized services.</p>
            <h3 className="text-xl font-semibold mb-2">What are cookies?</h3>
            <p className="mb-4">Cookies are small text files that are placed on your device when you visit our website. They allow us to remember your preferences and improve your user experience.</p>
            <h3 className="text-xl font-semibold mb-2">How we use cookies</h3>
            <p className="mb-4">We use cookies for various purposes, including analyzing site traffic, personalizing content, and remembering your login information.</p>
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <p className="mb-4">We want you to be completely satisfied with your purchase. If you are not satisfied, you may return the product within 30 days of delivery for a full refund or exchange.</p>
            <h3 className="text-xl font-semibold mb-2">Conditions for Returns</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Products must be in their original condition and packaging</li>
              <li>A valid proof of purchase is required</li>
              <li>Shipping costs for returns are the responsibility of the customer unless the product is defective</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold mb-4">Environmental Policy</h2>
            <p className="mb-4">At Humaya Power, we are committed to minimizing our environmental impact and promoting sustainable practices in the energy industry.</p>
            <h3 className="text-xl font-semibold mb-2">Our Commitments</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Reducing carbon emissions in our manufacturing processes</li>
              <li>Promoting the recycling and proper disposal of lithium-ion batteries</li>
              <li>Investing in research and development of more environmentally friendly energy storage solutions</li>
              <li>Complying with all applicable environmental laws and regulations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}