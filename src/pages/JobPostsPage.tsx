import React, { useState, useEffect } from 'react';
import { Search, Briefcase, Filter, MapPin, ArrowUpDown, ChevronDown, Clock, Award, GraduationCap, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface JobPost {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  type: string;
  category: string;
  experience_level: string;
  benefits: string[];
  skills: string[];
  deadline: string;
  featured: boolean;
  application_url: string;
  created_at: string;
}

const JobPostsPage: React.FC = () => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedExperience, setSelectedExperience] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setError(null);
      setIsLoading(true);
      
      const { data, error: supabaseError } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      if (!data) {
        throw new Error('No data received from the server');
      }

      setJobPosts(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch jobs. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredJobs = jobPosts.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    const matchesType = selectedType ? job.type === selectedType : true;
    const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
    const matchesExperience = selectedExperience ? job.experience_level === selectedExperience : true;
    
    return matchesSearch && matchesCategory && matchesType && matchesLocation && matchesExperience;
  });

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSelectedType('');
    setSelectedLocation('');
    setSelectedExperience('');
  };

  const handleRetry = () => {
    fetchJobs();
  };

  const categories = [...new Set(jobPosts.map(job => job.category))];
  const types = [...new Set(jobPosts.map(job => job.type))];
  const locations = [...new Set(jobPosts.map(job => job.location))];
  const experienceLevels = [...new Set(jobPosts.map(job => job.experience_level))];

  if (isLoading) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="text-lg font-medium text-red-800 mb-2">Error Loading Jobs</h3>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md mb-8 p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search for jobs, companies, or keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-1/4">
              <button
                onClick={handleFilterToggle}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md focus:outline-none hover:bg-gray-50"
              >
                <Filter className="h-5 w-5 mr-2 text-gray-500" />
                <span>Filters</span>
                <ChevronDown className={`h-5 w-5 ml-2 text-gray-500 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {filterOpen && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience Level
                  </label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Experience Levels</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
            </h2>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600 text-sm">Sort by:</span>
              <button className="flex items-center text-sm text-gray-800 hover:text-primary">
                <span>Most Recent</span>
                <ArrowUpDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-3/4 pr-6">
                      <div className="flex items-start">
                        <div 
                          className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mr-4 text-primary"
                        >
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                          <div className="flex flex-wrap items-center text-gray-600 mb-3 gap-3">
                            <span>{job.company}</span>
                            <span>•</span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </span>
                            <span>•</span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {new Date(job.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                              {job.type}
                            </span>
                            <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                              {job.category}
                            </span>
                            <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full flex items-center">
                              <GraduationCap className="h-3 w-3 mr-1" />
                              {job.experience_level}
                            </span>
                            {job.featured && (
                              <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full flex items-center">
                                <Award className="h-3 w-3 mr-1" />
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {job.description}
                          </p>
                          <div className="space-y-3">
                            <div className="flex flex-wrap gap-2">
                              {job.skills.slice(0, 4).map((skill, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                              {job.skills.length > 4 && (
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                  +{job.skills.length - 4} more
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {job.benefits.map((benefit, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded flex items-center"
                                >
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/4 flex flex-col items-start md:items-end justify-between mt-4 md:mt-0">
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500">Apply before</span>
                        <span className="text-sm font-medium">
                          {new Date(job.deadline).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="mt-auto pt-4 md:pt-0 w-full md:w-auto">
                        <a
                          href={job.application_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full md:w-auto btn-primary inline-block text-center"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No jobs found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={handleClearFilters}
                className="text-primary hover:text-primary-dark font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {filteredJobs.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-primary text-sm font-medium text-white hover:bg-primary-dark"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Next
              </a>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPostsPage;