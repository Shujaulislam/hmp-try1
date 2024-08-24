"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const MOCKDATA = [
  {
    iconAlt: 'Gauge Icon',
    title: 'Extreme performance',
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
  },
  {
    iconAlt: 'User Icon',
    title: 'Privacy focused',
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma,"
  },
  {
    iconAlt: 'Cookie Icon',
    title: 'No third parties',
    description:
      "They're popular, but they're rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    iconAlt: 'Lock Icon',
    title: 'Secure by default',
    description:
      "Although it still can't fly, its jumping power is outstanding, in Alola the mushrooms on Paras don't grow up quite right",
  },
  {
    iconAlt: 'Message Icon',
    title: '24/7 Support',
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
];

interface FeatureProps {
  iconAlt: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

function Feature({ iconAlt, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="bg-gray-100 rounded-full p-2 inline-flex justify-center items-center">
        <Image src="/path/to/your/icon.svg" alt={iconAlt} width={20} height={20} />
      </div>
      <h3 className="mt-4 mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

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

export default function FeaturesGrid() {
  return (
    <>
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Integrate effortlessly with any technology stack
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-center text-gray-600">
            Every once in a while, you'll see a Golbat that's missing some fangs. This happens when
            hunger drives it to try biting a Steel-type Pokémon.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {MOCKDATA.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>

      <section className="py-20 px-4 max-w-7xl mx-auto">
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
  );
}