"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [navbarClass, setNavbarClass] = useState('bg-transparent');
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Hide navbar when scrolling down by 600 pixels
            if (currentScrollPos > 600) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }

            // Change background color after scrolling down by 150 pixels
            if (currentScrollPos > 150) {
                setNavbarClass('bg-black');
            } else {
                setNavbarClass('bg-transparent');
            }

            // Show navbar when scrolling up
            if (currentScrollPos < prevScrollPos && prevScrollPos - currentScrollPos > 200) {
                setIsNavbarVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header className={`fixed top-0 inset-x-0 z-50 h-24 flex items-center transition-all duration-300 ${navbarClass} ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
                <nav className="flex justify-between items-center h-full">
                    <div className="flex min-w-max items-center">
                        <Link href="/" className="flex items-center gap-x-4 text-2xl font-semibold text-white">
                            <div className="flex items-center -space-x-3 font-semibold">
                                <Image src="/Logo.svg" alt="logo" width={120} height={120} />
                            </div>
                        </Link>
                    </div>
                    <div className={`flex flex-col space-y-10 inset-0 fixed top-0  h-[100vh] bg-white  dark:bg-gray-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14 transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max ${openNavbar ? "text-black text-center text-xl visible opacity-100 translate-y-0" : "-translate-y-9 text-white opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"}`}>
                        <ul className="flex flex-col gap-y-5  lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
                            <li>
                                <Link href="/" className="transition ease-linear hover:text-gray-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions" className="transition ease-linear hover:text-gray-200">
                                    Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="transition ease-linear hover:text-gray-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="transition ease-linear hover:text-gray-200">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="w-full flex sm:w-max lg:min-w-max lg:items-center">
                            <Link href="#" className="flex justify-center gap-x-3 items-center text-white hover:text-gray-200 border-b border-white hover:border-gray-200 bg-transparent">
                                Get in touch
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-end relative z-60 lg:hidden">
                        <button onClick={toggleNavbar} className="p-3 rounded-full outline-none w-12 aspect-square flex flex-col relative justify-center items-center">
                            <span className="sr-only">
                                Toggle navbar
                            </span>
                            <span className={`w-6 h-0.5 rounded-full bg-orange-500 transition-transform duration-300 ease-linear ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}`} />
                            <span className={`w-6 origin-center mt-1 h-0.5 rounded-full bg-orange-500 transition-all duration-300 ease-linear ${openNavbar ? "scale-x-0 opacity-0" : ""}`} />
                            <span className={`w-6 mt-1 h-0.5 rounded-full bg-orange-500 transition-all duration-300 ease-linear ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}`} />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;