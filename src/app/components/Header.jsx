"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const programs = [
    { name: "Research & Data", id: "research" },
    { name: "Beyond Mascunity", id: "man-must-cry" },
    { name: "He Stands for Her Dignity", id: "dignity" },
    { name: "Substance Use Awareness", id: "substance" },
    { name: "Caregivers Haven", id: "caregivers" },
  ];

  const about = [
    { name: "Who We Are", id: "who-we-are" },
    { name: "Why We Exist", id: "why-we-exist" },
    { name: "Our Vision & Mission", id: "vision-mission" },
    { name: "Our Values", id: "values" },
    { name: "Theory of Change", id: "theory-change" },
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-blue-500 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">CareConnect Rise</h1>
              <p className="text-xs text-blue-300">
                Mental Health & Community Support
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Home
            </button>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-BLACK hover:text-blue-400 transition-colors font-medium"
              >
                About
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  {about.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("programs")}
                className="flex items-center text-white hover:text-blue-400 transition-colors font-medium"
              >
                Programs
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === "programs" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "programs" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50">
                  {programs.map((program) => (
                    <button
                      key={program.id}
                      onClick={() => scrollToSection(program.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {program.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("approaches")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Our Approach
            </button>

            <button
              onClick={() => (window.location.href = "/blog")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Blog
            </button>

            <button
              onClick={() => scrollToSection("videos")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Videos
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection("get-involved")}
              className="btn bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0"
            >
              Get Involved
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-white hover:text-blue-400 transition-colors"
              >
                Home
              </button>
              <div>
                <button
                  onClick={() => toggleDropdown("about-mobile")}
                  className="flex items-center justify-between w-full py-2 text-white hover:text-blue-400 transition-colors"
                >
                  About
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "about-mobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about-mobile" && (
                  <div className="ml-4 mt-2 space-y-2">
                    {about.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left py-1 text-sm text-blue-300 hover:text-blue-400"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("programs-mobile")}
                  className="flex items-center justify-between w-full py-2 text-white hover:text-blue-400 transition-colors"
                >
                  Programs
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "programs-mobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "programs-mobile" && (
                  <div className="ml-4 mt-2 space-y-2">
                    {programs.map((program) => (
                      <button
                        key={program.id}
                        onClick={() => scrollToSection(program.id)}
                        className="block w-full text-left py-1 text-sm text-blue-300 hover:text-blue-400"
                      >
                        {program.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => scrollToSection("approaches")}
                className="text-left py-2 text-white hover:text-blue-400 transition-colors"
              >
                Our Approach
              </button>
              <button
                onClick={() => (window.location.href = "/blog")}
                className="text-left py-2 text-white hover:text-blue-400 transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("videos")}
                className="text-left py-2 text-white hover:text-blue-400 transition-colors"
              >
                Videos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-white hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("get-involved")}
                className="btn mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0"
              >
                Get Involved
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
