'use client';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/providers/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={"/logo2.png"}
                alt="Car Showcase" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CarShowcase
              </span>
            </Link>
            <p className="">
              Discover your dream car with our extensive collection of premium vehicles.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/cars" className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors">Browse Cars</Link></li>
              <li><Link href="/about" className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="t hover:text-blue-600  dark:hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 ">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-blue-600  dark:hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600  dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/help" className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 ">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className=" hover:text-blue-600  dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center  ">
            © {new Date().getFullYear()} CarShowcase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
