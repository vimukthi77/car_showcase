'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const featuredCars = [
    {
      id: 1,
      name: "BMW M4 Competition",
      price: "82,500",
      image: "/bmw-m4.jpg",
      specs: { power: "503 hp", acceleration: "3.8s", topSpeed: "180 mph" }
    },
    {
      id: 2,
      name: "Mercedes AMG GT",
      price: "118,600",
      image: "/amg-gt.jpg",
      specs: { power: "577 hp", acceleration: "3.1s", topSpeed: "195 mph" }
    },
    {
      id: 3,
      name: "Porsche 911 GT3",
      price: "161,100",
      image: "/porsche-911.jpg",
      specs: { power: "502 hp", acceleration: "3.2s", topSpeed: "197 mph" }
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground " >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mt-20"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                Find Your Dream Car Today
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Explore our exclusive collection of premium vehicles. Experience luxury and performance like never before.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/cars"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full inline-block transition-colors"
                >
                  Explore Cars
                </Link>
                <Link
                  href="/contact"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-full inline-block transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden"
            >
              <Image
                src="/homebg1.png"
                alt="Luxury Car Showcase"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Featured Cars Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-card-foreground">
            Featured Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <motion.div
                key={car.id}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-popover-foreground">{car.name}</h3>
                  <p className="text-muted-foreground mb-4">Starting from ${car.price}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Power</p>
                      <p className="font-semibold text-popover-foreground">{car.specs.power}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">0-60</p>
                      <p className="font-semibold text-popover-foreground">{car.specs.acceleration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Top Speed</p>
                      <p className="font-semibold text-popover-foreground">{car.specs.topSpeed}</p>
                    </div>
                  </div>
                  <Link
                    href={`/cars/${car.id}`}
                    className="block text-center bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Selection",
                description: "Curated collection of luxury vehicles",
                color: "var(--chart-1)"
              },
              {
                title: "Expert Support",
                description: "Dedicated team of automotive specialists",
                color: "var(--chart-2)"
              },
              {
                title: "Easy Financing",
                description: "Flexible payment options available",
                color: "var(--chart-4)"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg shadow-lg"
                style={{ backgroundColor: feature.color }}
              >
                <h3 className="text-xl font-bold mb-2 text-primary-foreground">{feature.title}</h3>
                <p className="text-primary-foreground/90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
