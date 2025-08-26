"use client";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const programs = [
    { name: "Research & Data", href: "#research" },
    { name: "A Man Must Cry", href: "#man-must-cry" },
    { name: "He Stands for Her Dignity", href: "#dignity" },
    { name: "Substance Use Awareness", href: "#substance" },
    { name: "Caregivers Haven", href: "#caregivers" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#who-we-are" },
    { name: "Our Approach", href: "#approaches" },
    { name: "Blog", href: "#blog" },
    { name: "Videos", href: "#videos" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Get Involved CTA */}
      <section
        id="get-involved"
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Be part of building a caring society where everyone can heal and
            thrive. Your support makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 border-white"
            >
              Volunteer With Us
            </Button>
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Make a Donation
            </Button>
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Support Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your donation helps us provide mental health support, healing
              programs, and community empowerment across Kenya.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Quick Donation Amounts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Choose Your Impact
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <button className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    $25
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-blue-700">
                    Supports 1 therapy session
                  </div>
                </button>
                <button className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    $50
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-blue-700">
                    Trains 1 peer leader
                  </div>
                </button>
                <button className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    $100
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-blue-700">
                    Funds community baraza
                  </div>
                </button>
                <button className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    $250
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-blue-700">
                    Supports full program
                  </div>
                </button>
              </div>

              {/* Custom Amount */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-medium">
                    Custom Amount:
                  </span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-32 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8">
                  Donate Now
                </Button>
              </div>
            </div>

            {/* Donation Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">One-Time Gift</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Make an immediate impact with a single donation
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 hover:bg-blue-50"
                >
                  Give Once
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Monthly Giving</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Provide sustained support for ongoing programs
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 hover:bg-blue-50"
                >
                  Give Monthly
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Corporate Sponsor
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Partner with us for larger community impact
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 hover:bg-blue-50"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white">
              <p className="text-lg font-medium">
                100% of your donation goes directly to mental health programs
                and community support.
              </p>
              <p className="text-sm opacity-90 mt-2">
                We are committed to transparency and maximizing your impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 text-lg mb-8">
                Ready to connect, heal, and make a difference? We'd love to hear
                from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+254 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">info@careconnectrise.org</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CCR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">CareConnect Rise</h3>
                  <p className="text-sm text-gray-400">
                    Mental Health & Community Support
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                A community-led, youth-powered, inclusive mental health movement
                born out of lived experience, building a caring society where
                everyone can heal and thrive.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(program.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                    >
                      {program.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 CareConnect Rise. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for mental health and community healing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
