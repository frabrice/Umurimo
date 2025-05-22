import React, { useState } from 'react';

const DemoRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        company: '',
        phone: '',
        employees: '',
      });
    }, 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transform transition-all duration-500 hover:shadow-xl">
      {!isSubmitted ? (
        <>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Request a Demo</h3>
          <form onSubmit={handleSubmit}>
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
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your work email"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your company name"
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
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="employees" className="block text-gray-700 text-sm font-medium mb-2">
                Number of Employees *
              </label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="" disabled>Select option</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">501+ employees</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Schedule Your Demo
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our 
              <a href="/terms" className="text-primary hover:underline"> Terms of Service </a> 
              and 
              <a href="/privacy" className="text-primary hover:underline"> Privacy Policy</a>.
            </p>
          </form>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Thank You!</h3>
          <p className="text-gray-600">
            Your demo request has been received. One of our team members will contact you shortly to schedule your personalized demo.
          </p>
        </div>
      )}
    </div>
  );
};

export default DemoRequestForm;