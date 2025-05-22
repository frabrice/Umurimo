import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: 'General Inquiry'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        subject: 'General Inquiry'
      });
    }, 5000);
  };

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, Tech Park, CA 94107',
      phone: '+1 (555) 123-4567',
      email: 'sf@hireflow.com',
      hours: 'Mon-Fri: 9AM-6PM PST'
    },
    {
      city: 'New York',
      address: '456 Madison Avenue, Suite 500, NY 10022',
      phone: '+1 (555) 987-6543',
      email: 'nyc@hireflow.com',
      hours: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      city: 'London',
      address: '78 Tech City, Shoreditch, London EC1V 9BX',
      phone: '+44 20 1234 5678',
      email: 'london@hireflow.com',
      hours: 'Mon-Fri: 9AM-6PM GMT'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl">
              Have questions about HireFlow? Our team is here to help you find the right solution for your recruitment needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat With Us</h3>
              <p className="text-gray-600 mb-4">
                Get instant answers through our live chat support.
              </p>
              <button className="text-primary font-medium hover:text-primary-dark transition-colors">
                Start Chat
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll respond within 24 hours.
              </p>
              <a href="mailto:contact@hireflow.com" className="text-primary font-medium hover:text-primary-dark transition-colors">
                contact@hireflow.com
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Talk to our sales or support team directly.
              </p>
              <a href="tel:+15551234567" className="text-primary font-medium hover:text-primary-dark transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Demo">Product Demo</option>
                      <option value="Sales Question">Sales Question</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              )}
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-600">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about HireFlow.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">How do I get started with HireFlow?</h3>
                <p className="text-gray-600">
                  You can sign up for a free 14-day trial on our website. No credit card is required, and you'll have access to all features during the trial period.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Can I integrate HireFlow with my existing HR systems?</h3>
                <p className="text-gray-600">
                  Yes, HireFlow integrates with most popular HR and applicant tracking systems. We provide API access and pre-built integrations for seamless connectivity.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Is there a limit to how many job posts I can create?</h3>
                <p className="text-gray-600">
                  Job post limits depend on your subscription plan. Our Starter plan includes up to 5 active job posts, while our Professional and Enterprise plans offer higher or unlimited posting capabilities.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">How can I get training for my team?</h3>
                <p className="text-gray-600">
                  All plans include access to our knowledge base and video tutorials. Professional and Enterprise plans include personalized onboarding and training sessions for your team.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">
                Didn't find what you're looking for?
              </p>
              <a
                href="/support"
                className="btn-primary inline-flex items-center"
              >
                <Users className="mr-2 h-5 w-5" />
                Visit Support Center
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;