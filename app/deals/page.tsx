"use client";

import { useState } from "react";
import Image from "next/image";

interface Deal {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
  category: string;
}

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const deals: Deal[] = [
    {
      id: 1,
      title: "Summer Special",
      description: "Get amazing discounts on luxury vehicles this summer",
      discount: "20% OFF",
      validUntil: "2024-08-31",
      image: "/luxury-car-1.jpg",
      category: "luxury"
    },
    {
      id: 2,
      title: "First-Time Buyer",
      description: "Special rates for first-time car buyers",
      discount: "Free Insurance",
      validUntil: "2024-12-31",
      image: "/family-car-1.jpg",
      category: "family"
    },
    {
      id: 3,
      title: "Winter Clearance",
      description: "End of year clearance on premium vehicles",
      discount: "30% OFF",
      validUntil: "2024-12-15",
      image: "/luxury-car-2.jpg",
      category: "luxury"
    },
    {
      id: 4,
      title: "Family Package",
      description: "Special offers on family-sized vehicles",
      discount: "15% OFF + Extended Warranty",
      validUntil: "2024-10-31",
      image: "/family-car-2.jpg",
      category: "family"
    },
    {
      id: 5,
      title: "Business Fleet",
      description: "Corporate discounts on luxury fleet vehicles",
      discount: "25% OFF",
      validUntil: "2024-09-30",
      image: "/luxury-car-3.jpg",
      category: "luxury"
    },
    {
      id: 6,
      title: "Holiday Special",
      description: "Celebrate the holidays with special car deals",
      discount: "Free Maintenance Package",
      validUntil: "2024-11-30",
      image: "/family-car-3.jpg",
      category: "family"
    },
    {
      id: 7,
      title: "Spring Collection",
      description: "New arrivals with exclusive spring pricing",
      discount: "10% OFF + Free Accessories",
      validUntil: "2024-05-31",
      image: "/luxury-car-4.jpg",
      category: "luxury"
    }
  ];

  const filteredDeals = selectedCategory === "all" 
    ? deals 
    : deals.filter(deal => deal.category === selectedCategory);

  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-12">
        <Image
          src="/deals-hero.jpg"
          alt="Special Deals"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Special Deals</h1>
            <p className="text-lg md:text-xl">Exclusive offers on premium vehicles</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
          }`}
        >
          All Deals
        </button>
        <button
          onClick={() => setSelectedCategory("luxury")}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "luxury"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSelectedCategory("family")}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "family"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
          }`}
        >
          Family Cars
        </button>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDeals.map((deal) => (
          <div
            key={deal.id}
            className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold">
                {deal.discount}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              <p className="text-muted-foreground mb-4">{deal.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Valid until: {new Date(deal.validUntil).toLocaleDateString()}
                </span>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Claim Deal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-card p-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest Deals</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter and never miss out on exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
