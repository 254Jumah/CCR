"use client";
import React, { useState } from "react";
import {
  Calendar,
  User,
  Heart,
  MessageCircle,
  Share2,
  Plus,
  ArrowLeft,
  Search,
  Filter,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import Header from "./Header";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Stories of Hope",
    "Mental Health Tips",
    "Community Updates",
    "Research Insights",
    "Program Highlights",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Breaking the Silence: A Young Man's Journey to Healing",
      excerpt:
        'David\'s story shows how the "Beyond Mascunity" program helped him overcome depression and become a peer leader in his community.',
      content: `David was 22 when he first walked into our "Beyond Mascunity" support group. Like many young men in his community, he had been taught that showing emotion was a sign of weakness. For years, he carried the weight of depression, anxiety, and trauma from childhood experiences in silence.

"I thought I was supposed to be strong for everyone else," David recalls. "But inside, I was drowning."

The turning point came when David attended his first group session. Surrounded by other men sharing their stories, he realized he wasn't alone. The safe space created by our peer facilitators allowed him to express emotions he had suppressed for years.

Through months of group therapy, storytelling sessions, and peer support, David began his healing journey. He learned healthy coping mechanisms, developed emotional intelligence, and most importantly, understood that vulnerability is actually a form of strength.

Today, David is a trained peer leader in our program, facilitating support groups for other young men in his community. His transformation has rippled through his family and friends, breaking generational cycles of emotional suppression.

"Healing isn't just about fixing yourself," David says. "It's about creating space for others to heal too."

David's story represents the power of community-led mental health support and the importance of creating culturally relevant spaces for healing.`,
      image:
        "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Stories of Hope",
      author: "Sarah Wanjiku",
      date: "2025-01-15",
      readTime: "5 min read",
      likes: 24,
      comments: 8,
      tags: [
        "Mental Health",
        "Men's Health",
        "Community Support",
        "Peer Leadership",
      ],
    },
    {
      id: 2,
      title: "Understanding Mental Health in the Context of Chronic Illness",
      excerpt:
        "Exploring the intersection between HIV/TB stigma and mental health challenges, and how our programs address these complex needs.",
      content: `Living with a chronic illness like HIV or TB brings unique mental health challenges that are often overlooked in traditional healthcare settings. The intersection of medical treatment, social stigma, and psychological wellbeing creates a complex web that requires specialized, compassionate care.

Our research has shown that individuals living with chronic illnesses face multiple layers of stigma - from their medical condition, from seeking mental health support, and often from their own internalized shame. This triple burden can lead to treatment non-adherence, social isolation, and severe depression.

At CareConnect Rise, we've developed an integrated approach that addresses both physical and mental health needs simultaneously. Our programs recognize that healing the mind is just as important as treating the body.

Key findings from our community research include:
- 78% of participants reported feeling isolated due to their diagnosis
- 65% had never received mental health support before joining our programs
- 89% showed improved treatment adherence after participating in our support groups

Our approach includes peer support from others with lived experience, trauma-informed therapy sessions, and economic empowerment opportunities that restore dignity and hope.

The journey to wellness is not just about managing symptoms - it's about reclaiming your life, your relationships, and your future. When we address mental health alongside chronic illness care, we see remarkable transformations in our participants' overall wellbeing and quality of life.`,
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Research Insights",
      author: "Dr. Michael Ochieng",
      date: "2025-01-12",
      readTime: "8 min read",
      likes: 18,
      comments: 12,
      tags: ["Research", "Chronic Illness", "HIV/TB", "Stigma", "Healthcare"],
    },
    {
      id: 3,
      title:
        "Community Baraza: Bringing Mental Health Support to the Grassroots",
      excerpt:
        "How our community-led barazas are creating safe spaces for mental health conversations in rural Kenya.",
      content: `The traditional baraza - a community gathering where local issues are discussed and resolved - has been reimagined as a powerful tool for mental health advocacy and support in rural Kenya.

Our Community Baraza program brings mental health conversations directly to the grassroots level, meeting people where they are and in formats they understand and trust. These gatherings combine traditional community leadership with modern mental health knowledge, creating a bridge between cultural wisdom and evidence-based care.

Each baraza is carefully planned with local chiefs, religious leaders, and community elders. We begin with storytelling - sharing experiences that resonate with the community's lived reality. This approach helps normalize mental health struggles and reduces stigma.

What makes our barazas unique:
- They're conducted in local languages and incorporate cultural practices
- Traditional healers and religious leaders participate alongside mental health professionals
- Community members share their own stories of healing and recovery
- Practical resources and referral information are provided
- Follow-up support groups are established

The impact has been remarkable. In the past year, our barazas have reached over 2,000 community members across 15 locations. We've seen increased help-seeking behavior, reduced stigma around mental health, and the emergence of natural support networks within communities.

One participant, Mama Grace, shared: "Before the baraza, I thought my son's depression was a curse. Now I understand it's an illness that can be treated, and our whole family is healing together."

The baraza model demonstrates that effective mental health support must be culturally grounded, community-led, and accessible to all.`,
      image:
        "https://images.pexels.com/photos/3184605/pexels-photo-3184605.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Program Highlights",
      author: "Grace Muthoni",
      date: "2025-01-10",
      readTime: "6 min read",
      likes: 31,
      comments: 15,
      tags: [
        "Community Engagement",
        "Rural Health",
        "Cultural Competency",
        "Grassroots",
      ],
    },
    {
      id: 4,
      title: "5 Simple Mindfulness Techniques for Daily Emotional Wellness",
      excerpt:
        "Practical mindfulness exercises you can do anywhere to support your mental health journey.",
      content: `Mindfulness doesn't require special equipment, expensive courses, or hours of meditation. These five simple techniques can be practiced anywhere, anytime, to support your emotional wellbeing and mental health.

**1. The 5-4-3-2-1 Grounding Technique**
When feeling overwhelmed or anxious, engage your senses:
- Notice 5 things you can see
- 4 things you can touch
- 3 things you can hear
- 2 things you can smell
- 1 thing you can taste

This technique helps anchor you in the present moment and can quickly reduce anxiety.

**2. Breath Awareness**
Simply focus on your breathing for 2-3 minutes:
- Breathe in slowly through your nose for 4 counts
- Hold for 4 counts
- Exhale through your mouth for 6 counts
- Repeat 5-10 times

This activates your body's relaxation response and can be done anywhere.

**3. Body Scan Check-in**
Take a moment to notice physical sensations:
- Start at the top of your head
- Slowly move your attention down through your body
- Notice areas of tension or discomfort
- Breathe into those areas and consciously relax

This helps you connect with your body and release physical stress.

**4. Mindful Walking**
Turn any walk into a mindfulness practice:
- Focus on the sensation of your feet touching the ground
- Notice your surroundings without judgment
- Coordinate your breathing with your steps
- If your mind wanders, gently return attention to walking

This combines physical activity with mental wellness.

**5. Gratitude Pause**
Several times a day, pause and identify:
- One thing you're grateful for right now
- One positive thing about yourself
- One good thing that happened today

This shifts your focus toward positive aspects of your life and builds resilience.

Remember, mindfulness is a practice. Start with just a few minutes a day and gradually increase as it becomes more natural. These techniques are tools you can use alongside professional mental health support when needed.`,
      image:
        "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mental Health Tips",
      author: "James Kimani",
      date: "Jan 8, 2025",
      readTime: "4 min read",
      likes: 42,
      comments: 6,
      tags: ["Mindfulness", "Self-Care", "Wellness", "Coping Skills"],
    },
    {
      id: 5,
      title: "Menstrual Health: How Male Allies Are Making a Difference",
      excerpt:
        'Spotlight on our "He Stands for Her Dignity" program and the men championing menstrual health awareness.',
      content: `When John first heard about our "He Stands for Her Dignity" program, he was skeptical. Like many men in his community, he considered menstrual health a "women's issue" that didn't concern him. Today, he's one of our most passionate male advocates for menstrual dignity.

The transformation began when John attended an educational session about menstrual health and its impact on girls' education and women's economic participation. He learned that period poverty affects 65% of women and girls in Kenya, leading to school absenteeism, job loss, and social isolation.

"I realized that my daughter, my wife, my sisters - they were all affected by something I had never bothered to understand," John reflects. "I felt ashamed of my ignorance, but also motivated to do better."

Our program trains men to become informed allies who can:
- Advocate for menstrual health policies in their workplaces and communities
- Support the women and girls in their lives without shame or embarrassment
- Challenge harmful cultural taboos and myths
- Participate in creating solutions, including local pad production

The economic component of the program has been particularly impactful. Men like John have learned to produce reusable sanitary pads, creating sustainable income sources while addressing period poverty. These social enterprises are run by mixed-gender teams, fostering collaboration and understanding.

The ripple effects are remarkable:
- Increased school attendance among girls in participating communities
- More open family conversations about reproductive health
- Reduced stigma around menstruation
- Economic empowerment for both men and women

John now facilitates workshops for other men and has helped establish three community pad banks. His daughter, who once missed school during her periods, is now a confident advocate for menstrual health among her peers.

"When men stand for women's dignity, everyone benefits," John says. "It's not just about periods - it's about creating a society where everyone can participate fully."

The "He Stands for Her Dignity" program demonstrates that gender equality requires active male participation and that sustainable change happens when entire communities are engaged.`,
      image:
        "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Community Updates",
      author: "Mary Njeri",
      date: "Jan 5, 2025",
      readTime: "7 min read",
      likes: 28,
      comments: 10,
      tags: [
        "Menstrual Health",
        "Gender Equality",
        "Male Allies",
        "Community Development",
      ],
    },
    {
      id: 6,
      title: "From Survivor to Healer: Training Our Peer Leaders",
      excerpt:
        "Inside look at how we train individuals with lived experience to become powerful advocates for mental health in their communities.",
      content: `The most powerful healers are often those who have walked the path of healing themselves. Our peer leadership training program transforms survivors into skilled facilitators, advocates, and community change-makers.

The journey from survivor to healer is not automatic - it requires intentional training, ongoing support, and a deep commitment to serving others. Our comprehensive peer leadership program spans six months and covers essential skills for effective community mental health support.

**Training Components:**

*Foundational Skills (Month 1-2):*
- Understanding trauma and its impacts
- Basic counseling and active listening techniques
- Recognizing when to refer to professional services
- Self-care and preventing burnout

*Facilitation Skills (Month 3-4):*
- Group dynamics and management
- Creating safe, inclusive spaces
- Conflict resolution and crisis intervention
- Storytelling as a healing tool

*Community Engagement (Month 5-6):*
- Advocacy and awareness-raising
- Working with traditional and religious leaders
- Organizing community events and barazas
- Building sustainable support networks

**The Selection Process:**
Not everyone who has experienced mental health challenges is ready to become a peer leader. We look for individuals who:
- Have demonstrated significant personal healing and growth
- Show natural empathy and communication skills
- Are committed to serving their communities
- Have the emotional stability to support others

**Ongoing Support:**
Peer leaders receive continuous mentorship, monthly supervision sessions, and access to professional consultation. We recognize that supporting others can be emotionally demanding, so we prioritize their wellbeing.

**Impact Stories:**
Grace, a peer leader from our Caregivers Haven program, has facilitated support groups for over 50 caregivers in the past year. "My own experience caring for my son with bipolar disorder was painful, but it gave me the wisdom to help other parents navigate their journeys."

Peter, trained through our substance use program, now runs recovery support groups in three communities. "I know what it feels like to hit rock bottom. That's why I can offer real hope to others who are struggling."

**The Ripple Effect:**
Each trained peer leader typically supports 20-30 individuals directly and influences many more through community advocacy. They become bridges between professional services and community needs, making mental health support more accessible and culturally relevant.

Our peer leaders are living proof that healing is possible and that those who have experienced darkness can become beacons of light for others.`,
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Stories of Hope",
      author: "Peter Mwangi",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      likes: 35,
      comments: 18,
      tags: ["Peer Support", "Leadership", "Training", "Community Health"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const selectedPostData = selectedPost
    ? blogPosts.find((post) => post.id === selectedPost)
    : null;

  if (selectedPostData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Button
            onClick={() => setSelectedPost(null)}
            variant="outline"
            className="mb-8 hover:bg-blue-50 border-blue-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <article className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={selectedPostData.image}
                  alt={selectedPostData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedPostData.category}
                    </span>
                    <span className="text-sm opacity-90">
                      {selectedPostData.readTime}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold mb-4">
                    {selectedPostData.title}
                  </h1>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 font-medium">
                        {selectedPostData.author}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">
                        {selectedPostData.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5" />
                      <span>{selectedPostData.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-5 h-5" />
                      <span>{selectedPostData.comments}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  {selectedPostData.content
                    .split("\n\n")
                    .map((paragraph, index) => {
                      if (
                        paragraph.startsWith("**") &&
                        paragraph.endsWith("**")
                      ) {
                        return (
                          <h3
                            key={index}
                            className="text-xl font-bold text-gray-900 mt-8 mb-4"
                          >
                            {paragraph.replace(/\*\*/g, "")}
                          </h3>
                        );
                      }
                      if (
                        paragraph.startsWith("*") &&
                        paragraph.endsWith("*")
                      ) {
                        return (
                          <h4
                            key={index}
                            className="text-lg font-semibold text-blue-700 mt-6 mb-3"
                          >
                            {paragraph.replace(/\*/g, "")}
                          </h4>
                        );
                      }
                      if (paragraph.startsWith("-")) {
                        const items = paragraph
                          .split("\n")
                          .filter((item) => item.startsWith("-"));
                        return (
                          <ul
                            key={index}
                            className="list-disc list-inside space-y-2 mb-6"
                          >
                            {items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-gray-700">
                                {item.substring(2)}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p
                          key={index}
                          className="text-gray-700 leading-relaxed mb-6"
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {selectedPostData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Blog Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Stories & Insights
          </h1>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Sharing powerful stories, research insights, and practical wisdom
            from our community-led mental health work across Kenya.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, stories, and insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filter by:</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                  : "hover:bg-blue-50 border-blue-200"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">
                    {post.readTime}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Submit Story CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border inline-block">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Share Your Story
            </h3>
            <p className="text-gray-600 mb-4">
              Have a story of healing or hope to share? We'd love to feature it
              on our blog.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
              Submit Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
