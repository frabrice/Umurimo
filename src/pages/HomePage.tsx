import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Briefcase, BarChart, Globe } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsCounter from '../components/StatsCounter';
import DemoRequestForm from '../components/DemoRequestForm';

const HomePage: React.FC = () => {
  const features = [
    {
      title: 'Smart Job Posts',
      description: 'Create engaging job posts with AI-powered templates optimized for maximum visibility and qualified applicants.',
      icon: <Briefcase className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Talent Matching',
      description: 'Our intelligent algorithm matches the right candidates with your job posts based on skills, experience, and culture fit.',
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Analytics Dashboard',
      description: 'Gain valuable insights into your recruitment process with comprehensive analytics and reporting tools.',
      icon: <BarChart className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Global Reach',
      description: 'Distribute your job posts across multiple channels and reach a diverse talent pool from around the world.',
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'HR Director at TechCorp',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'HireFlow revolutionized our recruitment process. We reduced our time-to-hire by 40% and improved the quality of candidates significantly.',
    },
    {
      name: 'Michael Chen',
      position: 'Talent Acquisition Lead at InnovateCo',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'The Job Posts feature helped us attract exactly the right talent we were looking for. The analytics provided valuable insights for optimizing our recruitment strategy.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Recruiting Manager at GrowthStart',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'Since implementing HireFlow, we\'ve seen a 35% increase in qualified applicants and significantly reduced our cost-per-hire.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter number={2500} label="Companies" />
            <StatsCounter number={150000} label="Job Posts" suffix="+" />
            <StatsCounter number={75} label="Applicant Increase" suffix="%" />
            <StatsCounter number={40} label="Faster Hiring" suffix="%" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Revolutionize Your Recruitment Process
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive HR solution focuses on creating effective job posts that attract
              the right talent and streamline your entire hiring workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Job Posts Preview Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Craft Perfect Job Posts That Attract Top Talent
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our intuitive job posting platform helps you create compelling job descriptions that
                resonate with the right candidates and stand out in a crowded marketplace.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI-powered job description templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>SEO optimization for maximum visibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Inclusion and diversity language checker</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multi-channel distribution with one click</span>
                </li>
              </ul>
              <Link
                to="/job-posts"
                className="btn-primary inline-flex items-center"
              >
                Explore Job Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  Premium
                </div>
                <h3 className="text-xl font-semibold mb-3">Senior UX Designer</h3>
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mr-2">
                    Full-time
                  </div>
                  <div className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                    Remote
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  We're looking for a Senior UX Designer to join our product team. You'll be
                  responsible for delivering exceptional user experiences for our enterprise
                  customers.
                </p>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">Remote (US)</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Salary Range:</span>
                    <span className="font-medium">$120K - $150K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Applications:</span>
                    <span className="font-medium">47 candidates</span>
                  </div>
                </div>
                <button className="w-full btn-primary">
                  View Details
                </button>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-secondary/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Trusted by Recruiters Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Hear from HR professionals who have transformed their recruitment process with our
              platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                image={testimonial.image}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to Transform Your Recruitment Process?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Schedule a demo today and discover how our Job Posts solution can help you attract,
                evaluate, and hire the best talent for your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/pricing"
                  className="btn border border-white text-white hover:bg-white/10"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div>
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;