"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, bounce: 0 },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center">
        {/* Animated SVG */}
        <motion.svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          initial="hidden"
          animate="visible"
          className="mx-auto mb-8"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-primary"
            variants={draw}
          />
          <motion.path
            d="M60 120 L140 80"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-primary"
            variants={draw}
          />
          <motion.path
            d="M60 80 L140 120"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-primary"
            variants={draw}
          />
        </motion.svg>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have taken a wrong turn.
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors inline-flex items-center justify-center"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <p className="text-muted-foreground mb-4">You might want to check:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/deals"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Special Deals
            </Link>
            <Link
              href="/about"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/cars"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Browse Cars
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
