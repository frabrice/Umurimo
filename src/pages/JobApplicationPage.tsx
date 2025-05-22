import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobPosts } from '../data/jobPostsData';

const JobApplicationPage: React.FC = () => {
  const { jobId } = useParams();
  const job = jobPosts.find(j => j.id === Number(jobId));

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    portfolio: '',
    linkedin: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!job) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Job not found</h1>
            <p className="mt-2 text-gray-600">The job posting you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Apply for {job.title}
            </h1>
            <p className="text-gray-600 mb-4">{job.company} • {job.location}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                  onChange={handleFileChange}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Accepted formats: PDF, DOC, DOCX (Max. 5MB)
                </p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.coverLetter}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.portfolio}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage;