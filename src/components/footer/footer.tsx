"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterItem = ({ text, link }: { text: string; link: string }) => {
  return (
    <li>
      <Link href={link}>{text}</Link>
    </li>
  );
};

const footerItems = [
  {
    id: 1,
    text: "Term of services",
    link: "#",
  },
  {
    id: 2,
    text: "Company",
    link: "#",
  },
  {
    id: 3,
    text: "Portfolio",
    link: "#",
  },
];

const FooterBlock = () => {
  const [footerClass, setFooterClass] = useState("bg-transparent");
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentFooter = footerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFooterClass("bg-black");
          } else {
            setFooterClass("bg-transparent text-black");
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer footer-center text-center text-white text-base-content p-4 transition-all duration-300 ${footerClass}`}
    >
      <aside className="flex flex-col items-center">
        <p className="mb-4">
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <br className="md:hidden" />{" "}
          <span className="text-orange-500 md:hover:text-orange-500 md:text-white">
            Humaya Power
          </span>
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/humayapower?igsh=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white hover:text-gray-400" size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/humaya-power/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white hover:text-gray-400" size={24} />
          </Link>
        </div>
      </aside>
    </footer>
  );
};

export default FooterBlock;
