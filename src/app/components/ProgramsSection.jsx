"use client";
import React, { useState } from "react";
import { Search, Users, Heart, Shield, Home } from "lucide-react";

const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: "research",
      icon: Search,
      title: "Research & Data",
      subtitle: "Turning stories into solutions and data into action",
      description:
        "This flagship program strengthens all CCR efforts by grounding them in real evidence from the communities we serve.",
      details: [
        "Community-Based Research with youth-led data collection",
        "Storytelling as Data using personal narratives",
        "Monitoring & Learning to track program impact",
        "Evidence for Advocacy translating findings into actionable reports",
      ],
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "man-must-cry",
      icon: Users,
      title: "Beyond Mascunity",
      subtitle: "Healing begins when boys and men are allowed to feel",
      description:
        "Creates safe spaces for boys and men to explore vulnerability, express emotions, and break generational silence.",
      details: [
        "Peer support groups for emotional expression",
        "Creative storytelling and male-led dialogue",
        "Community-led mental health model",
        "Leadership development and peer education training",
      ],
      image:
        "https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: "dignity",
      icon: Heart,
      title: "He Stands for Her Dignity",
      subtitle: "A Transformational Male-Led Menstrual Health Initiative",
      description:
        "Reimagines menstrual health advocacy by placing boys and men at the center as informed, empathetic allies.",
      details: [
        "Male advocacy for menstrual health awareness",
        "Safe dialogue spaces for men and women",
        "Community-based economic sustainability model",
        "Social enterprises for reusable sanitary pad production",
      ],
      image:
        "https://images.pexels.com/photos/3184605/pexels-photo-3184605.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: "substance",
      icon: Shield,
      title: "Substance Use Awareness",
      subtitle:
        "Recovery support focused on awareness, prevention, and harm reduction",
      description:
        "Empowers young people through open conversations, education, and access to youth-friendly recovery pathways.",
      details: [
        "Stigma reduction and peer-led support",
        "School forums and community barazas",
        "Intersection of substance use and chronic illness support",
        "Vocational training and social enterprise development",
      ],
      image:
        "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-700 to-blue-900",
    },
    {
      id: "caregivers",
      icon: Home,
      title: "Caregivers Haven",
      subtitle: "A safe space for those who hold others up",
      description:
        "Community-led psychosocial support program dedicated to uplifting caregivers of individuals with mental health challenges.",
      details: [
        "Support for parents, siblings, spouses, and guardians",
        "Recognition of caregiver burnout and stress",
        "Community-rooted healing approaches",
        "Economic empowerment integrated with mental health support",
      ],
      image:
        "https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-800 to-indigo-900",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Flagship Programs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five comprehensive programs designed to address mental health
            challenges through community-led, trauma-informed approaches.
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const isExpanded = selectedProgram === index;

            return (
              <div
                key={program.id}
                id={program.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${program.color} p-8 text-white`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {program.title}
                        </h3>
                        <p className="text-lg opacity-90">{program.subtitle}</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedProgram(isExpanded ? null : index)
                      }
                      className="btn btn-outline border-white/30 text-black hover:bg-green-900"
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-600 mb-6">
                    {program.description}
                  </p>

                  {isExpanded && (
                    <div className="grid lg:grid-cols-2 gap-8 mt-8 animate-in slide-in-from-top duration-300">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {program.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color} mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-64 object-cover rounded-xl shadow-md"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20 rounded-xl`}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
