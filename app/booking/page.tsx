"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  carModel: string;
  licenseNumber: string;
  comments: string;
}

export default function TestDrivePage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    carModel: "",
    licenseNumber: "",
    comments: "",
  });

  const carModels = [
    "Tesla Model S",
    "BMW 3 Series",
    "Mercedes-Benz C-Class",
    "Audi A4",
    "Toyota Camry",
    "Honda Civic",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Test Drive</h1>
          <p className="text-muted-foreground text-lg">
            Experience the thrill of driving your dream car
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-8 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-background p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Test Drive Details */}
            <div className="bg-background p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-semibold mb-4">Test Drive Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDate: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Time
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Car Model</label>
                <select
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  value={formData.carModel}
                  onChange={(e) =>
                    setFormData({ ...formData, carModel: e.target.value })
                  }
                >
                  <option value="">Select a car model</option>
                  {carModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Driver's License Number
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  value={formData.licenseNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, licenseNumber: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Additional Comments
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  value={formData.comments}
                  onChange={(e) =>
                    setFormData({ ...formData, comments: e.target.value })
                  }
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Schedule Test Drive
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-muted-foreground"
        >
          <p>
            By scheduling a test drive, you agree to our terms and conditions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
