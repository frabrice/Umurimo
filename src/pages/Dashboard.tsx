import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, Eye, BarChart, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  type: string;
  deadline: string;
  created_at: string;
}

interface BlogPost {
  id: string;
  title: string;
  author: string;
  category: string;
  read_time: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'blog'>('jobs');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchUserContent();
    }
  }, [user]);

  const fetchUserContent = async () => {
    try {
      // Fetch user's jobs
      const { data: jobsData, error: jobsError } = await supabase
        .from('jobs')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (jobsError) throw jobsError;
      setJobs(jobsData || []);

      // Fetch user's blog posts
      const { data: blogData, error: blogError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (blogError) throw blogError;
      setBlogPosts(blogData || []);
    } catch (error) {
      console.error('Error fetching user content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteJob = async (id: string) => {
    try {
      const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setJobs(jobs.filter(job => job.id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleDeleteBlogPost = async (id: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setBlogPosts(blogPosts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

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

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex gap-4">
              {activeTab === 'jobs' && (
                <Link
                  to="/dashboard/create-job"
                  className="btn-primary inline-flex items-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Job Post
                </Link>
              )}
              {activeTab === 'blog' && (
                <Link
                  to="/dashboard/create-blog"
                  className="btn-primary inline-flex items-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Blog Post
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`${
                  activeTab === 'jobs'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Job Posts
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`${
                  activeTab === 'blog'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Blog Posts
              </button>
            </nav>
          </div>
        </div>

        {/* Stats Overview */}
        {activeTab === 'jobs' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Active Posts</h3>
              <p className="text-3xl font-bold text-primary">{jobs.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Applications</h3>
              <p className="text-3xl font-bold text-primary">0</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Views Today</h3>
              <p className="text-3xl font-bold text-primary">0</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Conversion Rate</h3>
              <p className="text-3xl font-bold text-primary">0%</p>
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Published Posts</h3>
              <p className="text-3xl font-bold text-primary">{blogPosts.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Views</h3>
              <p className="text-3xl font-bold text-primary">0</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Avg. Read Time</h3>
              <p className="text-3xl font-bold text-primary">0m</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Engagement Rate</h3>
              <p className="text-3xl font-bold text-primary">0%</p>
            </div>
          </div>
        )}

        {/* Content Tables */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {activeTab === 'jobs' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applications
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Posted Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Deadline
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{job.title}</div>
                            <div className="text-sm text-gray-500">{job.company}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(job.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(job.deadline).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            className="text-primary hover:text-primary-dark"
                            title="View Applications"
                          >
                            <BarChart className="h-5 w-5" />
                          </button>
                          <button
                            className="text-blue-600 hover:text-blue-900"
                            title="Preview"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          <button
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Edit"
                          >
                            <Edit2 className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteJob(job.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Published Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Read Time
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(post.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.read_time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-900"
                            title="Preview"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          <button
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Edit"
                          >
                            <Edit2 className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteBlogPost(post.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;