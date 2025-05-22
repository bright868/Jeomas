import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, Phone, Mail, Lightbulb, Globe, Code } from "lucide-react";

const slides = [
  {
    title: "Innovation at Jeomas",
    text: "We embrace cutting-edge technology to keep your business ahead.",
  },
  {
    title: "Customized Solutions",
    text: "Tailored services that adapt to your unique challenges.",
  },
  {
    title: "Global Impact",
    text: "Our reach extends beyond borders, delivering global value.",
  },
];

export default function JeomasWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-600">Jeomas</h1>
        <p className="text-lg mt-2">Empowering Businesses Through Innovation</p>
      </header>

      {/* Slides Section */}
      <motion.section
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative bg-blue-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            {slides[currentSlide].title}
          </h2>
          <p className="text-base text-gray-700 mb-4">
            {slides[currentSlide].text}
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={prevSlide} variant="outline">Previous</Button>
            <Button onClick={nextSlide} variant="outline">Next</Button>
          </div>
        </div>
      </motion.section>

      <main className="grid gap-10">
        {/* About Section */}
        <motion.section
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-base text-gray-600">
            Jeomas is a forward-thinking company focused on delivering smart solutions
            to businesses across various industries. We specialize in software development,
            digital transformation, strategic consulting, and innovation deployment.
          </p>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="rounded-2xl shadow-lg p-4">
            <CardContent>
              <Briefcase className="text-blue-500 mb-2" size={32} />
              <h3 className="font-bold text-lg mb-1">Consulting</h3>
              <p className="text-sm text-gray-600">
                Strategic consulting to help you grow and scale your business efficiently.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg p-4">
            <CardContent>
              <Code className="text-blue-500 mb-2" size={32} />
              <h3 className="font-bold text-lg mb-1">Software Development</h3>
              <p className="text-sm text-gray-600">
                Building custom applications tailored to your unique business needs.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg p-4">
            <CardContent>
              <Globe className="text-blue-500 mb-2" size={32} />
              <h3 className="font-bold text-lg mb-1">Digital Transformation</h3>
              <p className="text-sm text-gray-600">
                Modernizing operations with the latest digital tools and technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg p-4">
            <CardContent>
              <Lightbulb className="text-blue-500 mb-2" size={32} />
              <h3 className="font-bold text-lg mb-1">Innovation Services</h3>
              <p className="text-sm text-gray-600">
                Driving innovation with research, prototyping, and tech scouting.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg p-4">
            <CardContent>
              <Briefcase className="text-blue-500 mb-2" size={32} />
              <h3 className="font-bold text-lg mb-1">Training Programs</h3>
              <p className="text-sm text-gray-600">
                Equip your team with modern tools and methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg p-4">
            <CardContent>
              <Globe className="text-blue-500 mb-2" size={32} />
              <h3 className="font-bold text-lg mb-1">Global Outreach</h3>
              <p className="text-sm text-gray-600">
                Partnering with international organizations for a bigger impact.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="max-w-2xl mx-auto text-center mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-base text-gray-600 mb-4">
            Get in touch to learn how Jeomas can support your business.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline">
              <Phone className="mr-2" /> +1 (234) 567-890
            </Button>
            <Button variant="outline">
              <Mail className="mr-2" /> contact@jeomas.com
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Jeomas. All rights reserved.
      </footer>
    </div>
  );
}
