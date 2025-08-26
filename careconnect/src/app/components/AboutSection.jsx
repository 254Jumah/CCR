import React from 'react';
import { Heart, Users, Shield, Star, Lightbulb, Handshake } from 'lucide-react';

const AboutSection = () => {
  const values = [
    { icon: Heart, title: 'Compassion', description: 'We lead with care and empathy.' },
    { icon: Users, title: 'Lived Truth', description: 'Our pain births purpose.' },
    { icon: Shield, title: 'Community Power', description: 'Healing starts at home.' },
    { icon: Star, title: 'Inclusivity', description: 'We center all genders, backgrounds, and experiences.' },
    { icon: Lightbulb, title: 'Healing Justice', description: 'We address trauma through safe, equitable approaches.' },
    { icon: Handshake, title: 'Collaboration', description: 'We rise through partnerships and co-creation.' }
  ];

  return (
    <div className="py-20">
      {/* Who We Are */}
      <section id="who-we-are" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              CareConnect Rise (CCR) is a community-led, youth powered, inclusive mental health movement born out of lived experience. Founded in 2025 by mental health survivors, passionate advocates, and community leaders determined to create a caring society.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe in building a society where everyone, regardless of gender, background, or status feels emotionally safe to connect, heal, and thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">We are survivors.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">We are storytellers.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">We are system shifters.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Community gathering" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section id="why-we-exist" className="mb-20 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">Why We Exist</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-12"></div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Across Kenya and beyond, countless individuals within the community majorly the youth bear the weight of mental and emotional trauma. This has been associated with factors such as stigma, poverty, addiction, gender-based violence, and generational silence.
              </p>
              <p>
                Many endures this suffering in silence particularly those affected by chronic illnesses like Human Immunodeficiency Virus (HIV) and Tuberculosis (TB), where stigma, fear, and social judgment often lead to isolation and deep psychological distress. Despite the growing need, mental health remains widely misunderstood, underfunded, and inaccessible to the most in need.
              </p>
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
                <p className="text-xl font-medium text-center">
                  At CareConnect Rise (CCR), we believe that healing begins at home, driven by youth, and sustained by dignity, justice and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-blue-800 text-lg">
                To be a world class citadel of hope and healing for mental health.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-blue-800 text-lg">
                To empower marginalized communities by building an inclusive society where every person can thrive with equity, care, wellness, empowerment, and dignity through trauma-informed, gender-inclusive programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section id="theory-change" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Theory of Change</h2>
            <div className="w-20 h-1 bg-white/30 mx-auto mb-12"></div>
            <h3 className="text-2xl font-bold mb-8">Listen. Heal. Empower. Thrive.</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">01</div>
                <h4 className="font-semibold mb-2">Listen</h4>
                <p className="text-sm opacity-90">Deeply to real stories and lived experiences.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">02</div>
                <h4 className="font-semibold mb-2">Create</h4>
                <p className="text-sm opacity-90">Safe spaces for emotional healing and wellness.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">03</div>
                <h4 className="font-semibold mb-2">Empower</h4>
                <p className="text-sm opacity-90">Peer leaders and amplify community voices.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">04</div>
                <h4 className="font-semibold mb-2">Integrate</h4>
                <p className="text-sm opacity-90">Livelihoods with mental health support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;