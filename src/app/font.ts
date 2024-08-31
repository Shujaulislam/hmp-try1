import { Syne, Roboto } from "next/font/google"; // Import multiple fonts as needed

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
