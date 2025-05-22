import React from 'react';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'One-time Post',
      price: 29,
      duration: 'one-time',
      features: [
        'Single job post',
        'Active for 30 days',
        'Basic job post template',
        'Standard visibility',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: '7 Days',
      price: 49,
      duration: '7 days',
      features: [
        'Single job post',
        'Active for 7 days',
        'Featured placement',
        'Priority support',
        'Advanced analytics',
        'Social media promotion'
      ]
    },
    {
      name: '10 Days',
      price: 69,
      duration: '10 days',
      features: [
        'Single job post',
        'Active for 10 days',
        'Featured placement',
        'Priority support',
        'Advanced analytics',
        'Social media promotion'
      ]
    },
    {
      name: 'Monthly',
      price: 99,
      duration: '30 days',
      features: [
        'Single job post',
        'Active for 30 days',
        'Premium placement',
        'Priority support',
        'Advanced analytics',
        'Social media promotion'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">
              Choose the perfect duration for your job posting needs. No hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 ml-2">
                      {plan.duration === 'one-time' ? 'one-time' : `/${plan.duration}`}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">When does my job post become active?</h3>
                <p className="text-gray-600">
                  Your job post becomes active immediately after purchase and will remain visible for the duration of your chosen plan.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Can I extend my job post duration?</h3>
                <p className="text-gray-600">
                  Yes, you can extend your job post duration at any time by purchasing additional time or selecting a longer duration plan.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">What happens when my post expires?</h3>
                <p className="text-gray-600">
                  When your post expires, it will no longer be visible to job seekers. However, you'll still have access to all applications received during the active period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Find Your Next Great Hire?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that use Umurimo to attract and hire the best talent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/signup"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Post a Job Now
            </a>
            <a
              href="/contact"
              className="btn border border-white text-white hover:bg-white/10"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;