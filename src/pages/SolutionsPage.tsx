import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  UserCheck,
  BarChart,
  MessageSquare,
  Briefcase,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Smart Recruitment',
      description: 'AI-powered recruitment solution that helps you find and attract the best talent.',
      icon: <Users className="h-8 w-8 text-primary" />,
      features: [
        'AI-powered candidate matching',
        'Automated screening and shortlisting',
        'Multi-channel job distribution',
        'Custom recruitment workflows'
      ]
    },
    {
      title: 'Applicant Tracking',
      description: 'Streamline your hiring process with our comprehensive applicant tracking system.',
      icon: <Target className="h-8 w-8 text-primary" />,
      features: [
        'Centralized candidate database',
        'Interview scheduling',
        'Team collaboration tools',
        'Custom evaluation forms'
      ]
    },
    {
      title: 'Employee Onboarding',
      description: 'Create a seamless onboarding experience for your new hires.',
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      features: [
        'Automated onboarding workflows',
        'Digital document management',
        'Training tracking',
        'Progress monitoring'
      ]
    },
    {
      title: 'HR Analytics',
      description: 'Make data-driven decisions with powerful HR analytics and reporting.',
      icon: <BarChart className="h-8 w-8 text-primary" />,
      features: [
        'Real-time recruitment metrics',
        'Custom report builder',
        'Predictive analytics',
        'Performance insights'
      ]
    }
  ];

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Seamless Communication',
      description: 'Built-in messaging and collaboration tools for effective team communication.'
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Job Post Management',
      description: 'Create and manage job posts with AI-powered optimization suggestions.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Talent Assessment',
      description: 'Comprehensive assessment tools to evaluate candidate skills and fit.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Performance Tracking',
      description: 'Monitor and analyze recruitment performance metrics in real-time.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete HR Solutions for Modern Teams
            </h1>
            <p className="text-xl mb-8">
              Transform your recruitment process with our comprehensive suite of HR solutions designed
              for the modern workplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                Schedule Demo
              </Link>
              <Link
                to="/pricing"
                className="btn border border-white text-white hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive platform provides all the tools you need to streamline your recruitment
              process and make better hiring decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Ready to Transform Your Recruitment Process?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of companies that use our platform to streamline their hiring workflow
              and make better hiring decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;