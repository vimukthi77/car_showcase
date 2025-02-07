"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "1000+", label: "Cars Sold" },
    { number: "50+", label: "Expert Staff" },
    { number: "15+", label: "Years Experience" },
  ];

  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/team/ceo.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Johnson",
      position: "Head of Sales",
      image: "/team/sales-head.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mike Williams",
      position: "Chief Technical Officer",
      image: "/team/cto.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto h-full flex items-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Driving Excellence in Every Journey
              </h1>
              <p className="text-lg md:text-xl">
                Your trusted partner in finding the perfect vehicle since 2008
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2008, we began with a simple mission: to revolutionize
                the car buying experience. Our journey started with a small
                showroom and a team of passionate automotive experts.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be one of the leading car dealerships,
                serving thousands of satisfied customers and offering an extensive
                collection of premium vehicles.
              </p>
            </motion.div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/story-image.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden group"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.position}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.social.linkedin}
                      className="text-primary hover:text-primary/80"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-primary hover:text-primary/80"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service.",
                icon: "🌟",
              },
              {
                title: "Integrity",
                description:
                  "Honest and transparent dealings with our customers.",
                icon: "🤝",
              },
              {
                title: "Innovation",
                description:
                  "Embracing new technologies and methods to serve you better.",
                icon: "💡",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-background"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
