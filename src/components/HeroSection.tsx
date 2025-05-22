import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/5 rounded-full"></div>
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 bg-accent/5 rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Next-Gen HR Solution
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Transform Your</span> 
              <span className="text-primary">Recruitment</span> Process
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Create compelling job posts that attract the right talent and streamline your entire hiring workflow with our all-in-one HR solution.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
              <Link to="/signup" className="btn-primary">
                Get Started Free
              </Link>
              <Link to="/demo" className="btn-secondary">
                Schedule a Demo
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start text-sm text-gray-500 gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-lg mx-auto relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Job Posts Dashboard</h3>
                    <p className="text-sm text-gray-500">Company: TechInnovate</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                  Live
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Senior Product Manager</h4>
                    <span className="text-primary text-sm">42 applicants</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">Remote</span>
                    <span className="mr-3">•</span>
                    <span>Full-time</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">UI/UX Designer</h4>
                    <span className="text-primary text-sm">28 applicants</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">San Francisco</span>
                    <span className="mr-3">•</span>
                    <span>Contract</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                    <div className="bg-secondary h-1.5 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Full Stack Developer</h4>
                    <span className="text-primary text-sm">64 applicants</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">New York</span>
                    <span className="mr-3">•</span>
                    <span>Full-time</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                    <div className="bg-accent h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              
              <Link to="/job-posts" className="text-primary font-medium flex items-center justify-center hover:text-primary-dark transition-colors">
                View All Job Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full bg-primary/10 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;