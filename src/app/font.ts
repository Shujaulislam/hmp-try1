import { Syne, Roboto, Montserrat, Nunito } from "next/font/google"; // Import multiple fonts as needed

export const syne = Syne({
  subsets: ['latin'], // Specify subsets
  weight: ['400', '500', '600','700', '800'], // Specify the font weights you want to use
  display: 'swap', // Use swap for better performance
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Specify weights as needed
  display: 'swap',
});

export const montserrat = Montserrat ({
  subsets: ['latin'],
  weight: ['400','500','700'],
  display: 'swap',
});

export const nunito = Nunito ({
  subsets: ['latin'],
  weight: ['400','500','700'],
  display: 'swap',
});