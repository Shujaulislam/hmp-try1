import React from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Top Rated",
    description: "Our commitment to excellence has earned us top ratings from satisfied customers across the board. I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.",
    icon: "⭐⭐⭐",
  },
  {
    title: "30 Years of Experience",
    description: "Our commitment to excellence has earned us top ratings from satisfied customers across the board. I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.",
    icon: "🏆🏆🏆🏆🏆",
  },
  {
    title: "Quality That Lasts",
    description: "Our commitment to excellence has earned us top ratings from satisfied customers across the board. I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.",
    icon: "🔧🔧",
  },
  {
    title: "Personalised Solutions",
    description: "Our commitment to excellence has earned us top ratings from satisfied customers across the board. I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.",
    icon: "📊",
  },
];

const FeatureCard = ({ title, description, icon, }: Feature) => (
  <div className="bg-custom-blue-gray p-8  rounded-lg shadow-md">
    <h3 className="text-black text-2xl font-semibold mb-4">{title} <span className="text-3xl">{icon}</span></h3>
    <p className="text-gray-600 text-lg">{description}</p>
  </div>
);

export default function AboutUs() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/StoreDot.jpg"
          alt="Solar panel workers"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-cyan-300 to-transparent z-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 z-20">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
            We Are Humaya Power
          </h1>
        </div>
      </div>

      {/* Section 2 - A Better Tomorrow */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r bg-slate-300 z-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 z-20">
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
            A Better Tomorrow
          </h2>
        </div>
      </div>

      {/* New Paragraph Section */}
<div className="bg-custom-dark-blue text-white py-16 px-8">
  <p className="max-w-2xl text-lg leading-relaxed text-left"> {/* Added text-left */}
    I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
  </p>
  <p className="max-w-2xl text-lg leading-relaxed mt-4 text-left"> {/* Added text-left */}
    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
  </p>
</div>

      {/* Feature Grid Section #CFDDE9 */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}