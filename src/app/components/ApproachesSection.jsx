import React from "react";
import {
  Stethoscope,
  Users,
  Star,
  Briefcase,
  Apple as Ripples,
} from "lucide-react";

const ApproachesSection = () => {
  const approaches = [
    {
      icon: Stethoscope,
      step: "01",
      title: "Primary Mental Health Screening",
      subtitle: "Root-Cause Discovery",
      description:
        "We create safe, non-judgmental spaces using validated tools and trauma-informed dialogue to uncover root causes of emotional distress.",
      why: "You can't heal what you haven't understood.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      step: "02",
      title: "Cohort-Based Therapy Sessions",
      subtitle: "Safe Healing Communities",
      description:
        "Participants are grouped into supportive cohorts for structured sessions blending evidence-based therapy with peer support and storytelling.",
      why: "Healing grows in safe and connected spaces.",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Star,
      step: "03",
      title: "Empowering Peer Leaders",
      subtitle: "Community Change-Makers",
      description:
        "Individuals showing growth are trained to become peer leaders, facilitating future groups and mentoring others through recovery.",
      why: "Lasting change is community-grown.",
      color: "from-blue-700 to-blue-800",
    },
    {
      icon: Briefcase,
      step: "04",
      title: "Post-Therapy Livelihood Empowerment",
      subtitle: "Economic Resilience",
      description:
        "Participants receive vocational training, business mentorship, and startup support tailored to their strengths and interests.",
      why: "Economic stability supports emotional resilience.",
      color: "from-blue-800 to-indigo-800",
    },
    {
      icon: Ripples,
      step: "05",
      title: "Community Ripple & Systems Change",
      subtitle: "Collective Transformation",
      description:
        "Healing expands through mental health walks, dignity circles, school programs, and collaborations with local leaders.",
      why: "True healing transforms communities and systems.",
      color: "from-indigo-800 to-blue-900",
    },
  ];

  return (
    <section id="approaches" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our approaches are layered on healing the mind while empowering
            livelihoods. We believe mental health care must go beyond
            conversation—it must spark transformation through holistic,
            inclusive models.
          </p>
        </div>

        <div className="space-y-12">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={approach.step}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative">
                    <div
                      className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r ${approach.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">
                        {approach.step}
                      </span>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border">
                      <div className="flex items-start space-x-4 mb-6">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${approach.color} rounded-xl flex items-center justify-center`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {approach.title}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {approach.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {approach.description}
                      </p>
                      <div
                        className={`bg-gradient-to-r ${approach.color} text-white p-4 rounded-xl`}
                      >
                        <p className="font-medium italic">
                          Why it matters: {approach.why}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative">
                    <img
                      src={`https://images.pexels.com/photos/${
                        3184300 + index * 50
                      }/pexels-photo-${
                        3184300 + index * 50
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={approach.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${approach.color} opacity-20 rounded-2xl`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sustainability Model */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our Sustainability Model
            </h3>
            <p className="text-xl text-gray-300">
              Healing Minds. Restoring Dignity. Sustaining Impact.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Social Enterprises</h4>
              <p className="text-sm text-gray-300">
                Community-based enterprises that reinvest profits into mental
                health programs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Peer-Led Models</h4>
              <p className="text-sm text-gray-300">
                Locally-rooted models powered by lived experience for
                authenticity and scalability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Strategic Partnerships</h4>
              <p className="text-sm text-gray-300">
                Collaboration with NGOs and government to integrate mental
                health into public services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Ripples className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Open-Source Tools</h4>
              <p className="text-sm text-gray-300">
                Adaptable frameworks for partners to replicate and localize our
                model globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachesSection;
