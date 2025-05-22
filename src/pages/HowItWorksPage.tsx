import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Users, 
  CreditCard,
  Rocket,
  Search,
  FileCheck,
  Send,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const [activeAudience, setActiveAudience] = useState<'employers' | 'talents'>('employers');

  const employerSteps = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Contact Us",
      description: "Get in touch with our team to discuss your hiring needs and learn about our services.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Create Your Job Post",
      description: "Work with our team to craft a compelling job post that will attract the right candidates. Choose your preferred duration for the listing.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Complete Payment",
      description: "Select your preferred payment method and complete the transaction securely.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Go Live",
      description: "Your job post goes live on our platform, reaching thousands of qualified candidates.",
    }
  ];

  const talentSteps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Browse Jobs",
      description: "Search and filter through our extensive list of job opportunities to find positions that match your skills and interests.",
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Review Requirements",
      description: "Carefully read the job description and requirements to ensure you're a good fit for the position.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Verify Your Fit",
      description: "Compare your qualifications with the job requirements and ensure you meet the key criteria.",
    },
    {
      icon: <Send className="h-8 w-8 text-primary" />,
      title: "Apply Now",
      description: "Submit your application through our easy-to-use system and track your application status.",
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section with Toggle */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Umurimo Works
            </h1>
            <p className="text-xl mb-8">
              Whether you're hiring or looking for your next opportunity, we've got you covered.
            </p>
            
            {/* Audience Toggle */}
            <div className="inline-flex rounded-lg bg-white/10 p-1">
              <button
                onClick={() => setActiveAudience('employers')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeAudience === 'employers'
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                For Employers
              </button>
              <button
                onClick={() => setActiveAudience('talents')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeAudience === 'talents'
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                For Talents
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {activeAudience === 'employers' ? (
              <div className="space-y-12">
                {employerSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-start"
                  >
                    {/* Step Number */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <div className="rounded-lg bg-white p-6 shadow-lg">
                        <div className="mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < employerSteps.length - 1 && (
                      <div className="absolute top-12 left-6 h-16 w-px bg-primary/20"></div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-12">
                {talentSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-start"
                  >
                    {/* Step Number */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <div className="rounded-lg bg-white p-6 shadow-lg">
                        <div className="mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < talentSteps.length - 1 && (
                      <div className="absolute top-12 left-6 h-16 w-px bg-primary/20"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {activeAudience === 'employers'
                ? 'Ready to Find Your Next Great Hire?'
                : 'Ready to Find Your Next Opportunity?'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {activeAudience === 'employers'
                ? 'Join thousands of companies that use our platform to find and hire the best talent.'
                : 'Browse through thousands of opportunities and find your perfect match.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {activeAudience === 'employers' ? (
                <>
                  <Link to="/contact" className="btn-primary">
                    Post a Job
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Contact Sales
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className="btn-primary">
                    Browse Jobs
                  </Link>
                  <Link to="/register" className="btn-secondary">
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;