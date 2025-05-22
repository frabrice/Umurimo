import React from 'react';
import { Users, Award, Globe, TrendingUp, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Jennifer Thompson',
      position: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'With over 15 years of experience in HR tech, Jennifer leads our vision to transform recruitment processes worldwide.',
    },
    {
      name: 'Marcus Wong',
      position: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Marcus brings his expertise in AI and machine learning to create intelligent solutions for complex HR challenges.',
    },
    {
      name: 'Sophia Chen',
      position: 'Head of Product',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Sophia ensures our platform delivers an exceptional user experience while solving real-world recruitment problems.',
    },
    {
      name: 'David Okafor',
      position: 'Head of Customer Success',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'David leads our customer success team, ensuring clients achieve their recruitment goals with our platform.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl mb-8">
              Transforming the way companies connect with talent through innovative HR solutions that
              simplify recruitment and empower hiring teams.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Umurimo was founded in 2022 with a simple mission: to make recruitment more
                efficient, effective, and human-centered.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founders, Jennifer and Marcus, experienced firsthand the challenges of traditional
                recruitment processes. They saw how outdated systems created bottlenecks, leading to
                missed opportunities for both companies and candidates.
              </p>
              <p className="text-lg text-gray-600">
                Today, HireFlow serves thousands of companies worldwide, helping them create
                compelling job posts that attract the right talent and streamline their entire
                recruitment process.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">People First</h3>
              <p className="text-gray-600">
                We believe that technology should serve people, not the other way around.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from code to customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We're committed to creating a platform that promotes diversity and inclusion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to create cutting-edge solutions for HR challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              The talented individuals behind HireFlow who are passionate about transforming recruitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2500+</div>
              <p className="text-lg text-gray-600">Companies Using HireFlow</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150K+</div>
              <p className="text-lg text-gray-600">Job Posts Published</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">32</div>
              <p className="text-lg text-gray-600">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">96%</div>
              <p className="text-lg text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Join the Umurimo Community
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover how our platform can transform your recruitment process and help you find the
              right talent for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/signup"
                className="btn-primary"
              >
                Get Started Free
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;