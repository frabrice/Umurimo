import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-white/90">
              We're here to help you with any questions or inquiries you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-center mb-2">Email Us</h2>
              <p className="text-gray-600 text-center mb-4">
                Send us an email anytime and we'll respond within 24 hours.
              </p>
              <div className="text-center">
                <a 
                  href="mailto:info@umurimo.com" 
                  className="text-primary hover:text-primary-dark font-medium text-lg"
                >
                  info@umurimo.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-center mb-2">Call Us</h2>
              <p className="text-gray-600 text-center mb-4">
                Available Monday to Friday from 8:00 AM to 6:00 PM (CAT).
              </p>
              <div className="text-center">
                <a 
                  href="tel:+250787066219" 
                  className="text-primary hover:text-primary-dark font-medium text-lg"
                >
                  +250 787 066 219
                </a>
              </div>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-center mb-2">Visit Us</h2>
              <p className="text-gray-600 text-center mb-4">
                Our office is located in the heart of Kigali city.
              </p>
              <div className="text-center">
                <p className="text-primary font-medium text-lg">
                  1, KN 78 St
                </p>
                <p className="text-gray-600">
                  Kigali, Rwanda
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM (CAT)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service Area</h3>
                  <p className="text-gray-600">Available across Rwanda and East Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;