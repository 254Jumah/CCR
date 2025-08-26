"use client";
import React from "react";
import { ArrowRight, Heart, Users, Target } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-green-100/20"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Mental Health • Community • Healing
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Caring Society
                </span>{" "}
                for All
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                CareConnect Rise (CCR) is a community-led, youth-powered,
                inclusive mental health movement born out of lived experience.
                We believe in creating a society where everyone feels
                emotionally safe to connect, heal, and thrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("who-we-are")}
                className="btn btn-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <button
                onClick={() => scrollToSection("get-involved")}
                className="btn btn-outline btn-lg border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
              >
                Get Involved
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Flagship Programs</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Community Support</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-green-100">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Community mental health support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-sm font-medium text-gray-900">
                Mental Health
              </div>
              <div className="text-xs text-gray-600">Community Support</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-sm font-medium text-gray-900">
                Healing Justice
              </div>
              <div className="text-xs text-gray-600">Trauma Recovery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
