import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import ApproachesSection from "./components/ApproachesSection";
import BlogPage from "./components/BlogSection";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";

const App = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <ApproachesSection />
      <VideoSection />
    </main>
    <Footer />
  </div>
);

export default App;
