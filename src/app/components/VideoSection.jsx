"use client";
import React, { useState } from "react";
import { Play, Film, Users, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoCategories = [
    { id: "testimonials", name: "Testimonials", icon: Heart, count: 12 },
    { id: "educational", name: "Educational", icon: BookOpen, count: 8 },
    { id: "community", name: "Community Events", icon: Users, count: 15 },
    { id: "programs", name: "Program Highlights", icon: Film, count: 6 },
  ];

  const videos = [
    {
      id: "testimonial-1",
      title: "David's Journey: From Silence to Healing",
      description:
        'A powerful testimonial from a participant in our "A Man Must Cry" program sharing his transformation journey.',
      thumbnail:
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      category: "testimonials",
      duration: "8:45",
      views: "2.1K",
    },
    {
      id: "educational-1",
      title: "Understanding Mental Health Stigma in Kenya",
      description:
        "Educational video explaining the impact of mental health stigma and how communities can address it.",
      thumbnail:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeId: "dQw4w9WgXcQ",
      category: "educational",
      duration: "12:30",
      views: "5.7K",
    },
    {
      id: "community-1",
      title: "Mental Health Walk - Nairobi Community",
      description:
        "Highlights from our monthly mental health awareness walk in Nairobi, bringing the community together.",
      thumbnail:
        "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeId: "dQw4w9WgXcQ",
      category: "community",
      duration: "6:15",
      views: "3.2K",
    },
    {
      id: "program-1",
      title: "He Stands for Her Dignity - Program Overview",
      description:
        "An in-depth look at our male-led menstrual health initiative and its impact on communities.",
      thumbnail:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeId: "dQw4w9WgXcQ",
      category: "programs",
      duration: "15:20",
      views: "4.8K",
    },
    {
      id: "testimonial-2",
      title: "Grace's Story: Caregiver Support and Recovery",
      description:
        "A mother shares how our Caregivers Haven program helped her cope while supporting her child.",
      thumbnail:
        "https://images.pexels.com/photos/3184588/pexels-photo-3184588.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeId: "dQw4w9WgXcQ",
      category: "testimonials",
      duration: "7:30",
      views: "1.9K",
    },
    {
      id: "educational-2",
      title: "Mindfulness Techniques for Daily Wellness",
      description:
        "Practical mindfulness exercises you can practice at home to support your mental health.",
      thumbnail:
        "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeId: "dQw4w9WgXcQ",
      category: "educational",
      duration: "10:00",
      views: "8.1K",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("testimonials");
  const filteredVideos = videos.filter(
    (video) => video.category === activeCategory
  );

  const openVideo = (youtubeId) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="videos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Video Library
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch inspiring stories, educational content, and community
            highlights from our mental health initiatives across Kenya.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {videoCategories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white border-transparent shadow-lg"
                    : "bg-white hover:bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-300"
                }`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div
                    className={`p-3 rounded-xl ${
                      isActive ? "bg-white/20" : "bg-gray-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p
                      className={`text-sm ${
                        isActive ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {category.count} videos
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div
                className="relative overflow-hidden"
                onClick={() => openVideo(video.youtubeId)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-gray-800 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                  {video.duration}
                </div>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                  {video.views} views
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Subscribe to Our YouTube Channel
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Stay updated with the latest stories, educational content, and
                community highlights from CareConnect Rise.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 border-white"
                onClick={() =>
                  window.open("https://youtube.com/@careconnectrise", "_blank")
                }
              >
                <Film className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <Button
                  onClick={closeVideo}
                  variant="outline"
                  className="w-full"
                >
                  Close Video
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
