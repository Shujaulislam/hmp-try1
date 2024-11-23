import React from 'react'
import { syne } from '../font'


export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className={`${syne.className} text-4xl font-bold mb-8 text-gray-900`}>Terms and Conditions</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using Humaya Power&apos;s website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.</p>
            
            <h2 className="text-2xl font-semibold mb-4">2. Products and Services</h2>
            <p className="mb-4">Humaya Power manufactures and sells high-performance lithium-ion batteries and related energy solutions. All product specifications, pricing, and availability are subject to change without notice.</p>
            
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className="mb-4">All content on this website, including text, graphics, logos, and images, is the property of Humaya Power and protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.</p>
            
            <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p className="mb-4">Humaya Power shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the website and our products.</p>
            
            <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
            <p className="mb-4">These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
            
            <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
            <p className="mb-4">Humaya Power reserves the right to modify these Terms and Conditions at any time. We will notify users of any significant changes by posting an announcement on our website.</p>
            
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <p>Humaya Power</p>
            <p>E-153, Gali No. 2, Chand Bagh, New Mustafabad, New Delhi, Delhi, 110094</p>
            <p>Email: info@humayapower.in</p>
            <p>Phone: (+91) 729-1000-560</p>
          </div>
        </div>
      </div>
    </div>
  )
}