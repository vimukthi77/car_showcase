"use client";

import { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  image: string;
}
interface ModalProps {
    car: Car;
    onClose: () => void;
  }

  const CarModal = ({ car, onClose }: ModalProps) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card max-w-3xl w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="relative h-64 md:h-96">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {car.brand} {car.model}
                </h2>
                <p className="text-xl text-primary mt-2">${car.price.toLocaleString()}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-muted-foreground">Year</h3>
                <p className="mt-1 text-lg">{car.year}</p>
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground">Mileage</h3>
                <p className="mt-1 text-lg">{car.mileage} miles</p>
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground">Fuel Type</h3>
                <p className="mt-1 text-lg">{car.fuelType}</p>
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground">Transmission</h3>
                <p className="mt-1 text-lg">{car.transmission}</p>
              </div>
            </div>
            <Link href="/booking">
            <button
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              
            >
              Book Test Drive Now
            </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    );
  };

export default function ExplorePage() {
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const cars: Car[] = [
    {
      id: 1,
      brand: "BMW",
      model: "M4 Competition",
      year: 2023,
      price: 85000,
      mileage: "0",
      fuelType: "Petrol",
      transmission: "Automatic",
      image: "/cars/bmw-m41.jpg",
    },
    {
      id: 2,
      brand: "Mercedes",
      model: "AMG GT",
      year: 2023,
      price: 95000,
      mileage: "0",
      fuelType: "Petrol",
      transmission: "Automatic",
      image: "/cars/mercedes-amg.jpg",
    },
    {
      id: 3,
      brand: "Audi",
      model: "RS7",
      year: 2023,
      price: 120000,
      mileage: "0",
      fuelType: "Petrol",
      transmission: "Automatic",
      image: "/cars/audi-rs7.jpg",
    },
    {
      id: 4,
      brand: "Tesla",
      model: "Model S Plaid",
      year: 2023,
      price: 130000,
      mileage: "0",
      fuelType: "Electric",
      transmission: "Automatic",
      image: "/cars/tesla-s.jpg",
    },
    {
      id: 5,
      brand: "Porsche",
      model: "911 GT3",
      year: 2023,
      price: 170000,
      mileage: "0",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "/cars/porsche-9111.jpg",
    },
    {
      id: 6,
      brand: "BMW",
      model: "i8",
      year: 2023,
      price: 150000,
      mileage: "0",
      fuelType: "Hybrid",
      transmission: "Automatic",
      image: "/cars/bmw-i8.jpg",
    },
    {
      id: 7,
      brand: "Mercedes",
      model: "EQS",
      year: 2023,
      price: 110000,
      mileage: "0",
      fuelType: "Electric",
      transmission: "Automatic",
      image: "/cars/mercedes-eqs.jpg",
    },
    {
      id: 8,
      brand: "Audi",
      model: "e-tron GT",
      year: 2023,
      price: 105000,
      mileage: "0",
      fuelType: "Electric",
      transmission: "Automatic",
      image: "/cars/audi-etron.jpg",
    },
    {
      id: 9,
      brand: "Porsche",
      model: "Taycan",
      year: 2023,
      price: 85000,
      mileage: "0",
      fuelType: "Electric",
      transmission: "Automatic",
      image: "/cars/porsche-taycan.jpg",
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const brands = Array.from(new Set(cars.map((car) => car.brand)));

  const filteredCars = cars.filter((car) => {
    const matchesBrand = selectedBrand === "all" || car.brand === selectedBrand;
    const matchesSearch =
      car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Cars</h1>
          <p className="text-muted-foreground text-lg">
            Find your perfect match from our premium selection
          </p>
        </motion.div>

        {/* Filter and Search Section */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedBrand("all")}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedBrand === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              All Cars
            </button>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedBrand === brand
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full md:w-[300px] px-4 py-2 rounded-md border border-input bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {car.brand} {car.model}
                </h3>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <p>Year: {car.year}</p>
                  <p>Price: ${car.price.toLocaleString()}</p>
                  <p>Fuel Type: {car.fuelType}</p>
                  <p>Transmission: {car.transmission}</p>
                </div>
                <div className="flex gap-4">
                    <Link href="/booking">
                  <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Book Test Drive
                  </button>
                  </Link>
                    <button 
                        className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                        onClick={() => setSelectedCar(car)}
                    >
                        Learn More
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No cars found matching your criteria
            </p>
          </div>
        )}
      </div>
      {/* Add Modal */}
      <AnimatePresence>
        {selectedCar && (
          <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
