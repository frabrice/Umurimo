import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface JobFormData {
  title: string;
  company: string;
  description: string;
  location: string;
  type: string;
  category: string;
  experience_level: string;
  benefits: string[];
  deadline: string;
  skills: string[];
  application_url: string;
}

const CreateJobPost: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    company: '',
    description: '',
    location: '',
    type: '',
    category: '',
    experience_level: '',
    benefits: [],
    deadline: '',
    skills: [],
    application_url: ''
  });

  const [skillInput, setSkillInput] = useState('');
  const [benefitInput, setBenefitInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const handleBenefitAdd = () => {
    if (benefitInput.trim() && !formData.benefits.includes(benefitInput.trim())) {
      setFormData(prev => ({
        ...prev,
        benefits: [...prev.benefits, benefitInput.trim()]
      }));
      setBenefitInput('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleRemoveBenefit = (benefit: string) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter(b => b !== benefit)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('jobs')
        .insert([
          {
            ...formData,
            user_id: user?.id
          }
        ]);

      if (error) throw error;

      navigate('/dashboard');
    } catch (err) {
      console.error('Error creating job post:', err);
      setError('Failed to create job post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Create New Job Post</h1>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Senior Frontend Developer"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., TechCorp Inc."
                    />
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Describe the role, responsibilities, and requirements..."
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="application_url" className="block text-sm font-medium text-gray-700 mb-1">
                      Application URL *
                    </label>
                    <input
                      type="url"
                      id="application_url"
                      name="application_url"
                      required
                      value={formData.application_url}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., https://company.com/careers/job-title"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="e.g., San Francisco, CA"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        Job Type *
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select Category</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Design">Design</option>
                        <option value="Product">Product</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Customer Support">Customer Support</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience_level" className="block text-sm font-medium text-gray-700 mb-1">
                        Experience Level *
                      </label>
                      <select
                        id="experience_level"
                        name="experience_level"
                        required
                        value={formData.experience_level}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select Experience Level</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior Level">Senior Level</option>
                        <option value="Lead Level">Lead Level</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Add a required skill"
                    />
                    <button
                      type="button"
                      onClick={handleSkillAdd}
                      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                          className="ml-2 focus:outline-none"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={benefitInput}
                      onChange={(e) => setBenefitInput(e.target.value)}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Add a benefit"
                    />
                    <button
                      type="button"
                      onClick={handleBenefitAdd}
                      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                      >
                        {benefit}
                        <button
                          type="button"
                          onClick={() => handleRemoveBenefit(benefit)}
                          className="ml-2 focus:outline-none"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deadline */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Application Deadline</h2>
                <div>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    required
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Creating...' : 'Create Job Post'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJobPost;