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
    const closeNavbar = () => {
        setOpenNavbar(false);
    };

    useEffect(() => {
        // This block will only run on the client side
        if (typeof window !== 'undefined') {
            let ticking = false;
            let currentScrollPos = window.scrollY; // Now safely accessed within useEffect

            const handleScroll = () => {
                currentScrollPos = window.scrollY;

                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        // Hide navbar when scrolling down by 600 pixels
                        if (currentScrollPos > prevScrollPos && currentScrollPos > 600) {
                            setIsNavbarVisible(false);
                        }

                        // Change background color after scrolling down by 150 pixels
                        if (currentScrollPos > 100) {
                            setNavbarClass('bg-black');
                        } else {
                            setNavbarClass('bg-transparent');
                        }

                        // Show navbar when scrolling up
                        if (currentScrollPos < prevScrollPos && prevScrollPos - currentScrollPos > 20) {
                            setIsNavbarVisible(true);
                        }

                        setPrevScrollPos(currentScrollPos); // Update the previous scroll position
                        ticking = false;
                    });

                    ticking = true;
                }
            };

            window.addEventListener('scroll', handleScroll);

            // Cleanup function to remove event listener
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollPos]);

    return (
        <header className={`fixed top-0 inset-x-0 z-50 h-16 md:h-24 flex items-center transition-all duration-300 ${navbarClass} ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="md:px-12 lg:px-28 px-5 w-full items-center">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-20 h-10 md:w-28 md:h-14"/>
                    </Link>
                    <nav className={`
                        flex flex-col items-center text-center inset-0 fixed py-20
                        dark:bg-gray-950 
                        transition-all ease-linear duration-300 
                        md:!bg-transparent md:flex-row md:flex-1 md:py-0 md:px-0 md:space-y-0 md:gap-x-10 md:relative md:justify-between ${openNavbar ? "visible h-screen bg-white text-black opacity-100 translate-y-0" : "text-white -translate-y-9 opacity-0 invisible md:translate-y-0 md:visible md:opacity-100"}`}>
                        <ul className="flex flex-col gap-y-5 md:items-center md:flex-row md:gap-x-5 md:justify-center md:flex-1">
                            <li>
                                <Link href="/" onClick={closeNavbar} className="transition ease-linear hover:text-gray-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions" onClick={closeNavbar} className="transition ease-linear hover:text-gray-200">
                                    Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={closeNavbar} className="transition ease-linear hover:text-gray-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={closeNavbar} className="transition ease-linear hover:text-gray-200">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="w-full flex md:w-max md:min-w-max md:items-center">
                            <Link href="/contact" className="flex justify-center gap-x-3 items-center text-white hover:text-gray-200 border-b border-white hover:border-gray-200 bg-transparent" onClick={closeNavbar}>
                                Get in touch
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </nav>
                    <button onClick={toggleNavbar} className="p-3 rounded-full bg-transparent md:hidden dark:bg-emerald-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center">
                        <span className="sr-only">
                            Toggle navbar
                        </span>
                        <span className={`w-6 h-0.5 rounded-full bg-orange-600 transition-transform duration-300 ease-linear ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}`} />
                        <span className={`w-6 origin-center mt-1 h-0.5 rounded-full bg-orange-600 transition-all duration-300 ease-linear ${openNavbar ? "scale-x-0 opacity-0" : ""}`} />
                        <span className={`w-6 mt-1 h-0.5 rounded-full bg-orange-600 transition-all duration-300 ease-linear ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}`} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;