import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  read_time: string;
}

const CreateBlogPost: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    image_url: '',
    read_time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    'Career Development',
    'Diversity & Inclusion',
    'Employee Engagement',
    'HR Technology',
    'Industry News',
    'Leadership',
    'Market Insights',
    'Recruitment Trends',
    'Remote Work',
    'Talent Management',
    'Workplace Culture'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('blog_posts')
        .insert([
          {
            ...formData,
            user_id: user?.id
          }
        ]);

      if (error) throw error;

      navigate('/dashboard');
    } catch (err) {
      console.error('Error creating blog post:', err);
      setError('Failed to create blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter blog post title"
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  required
                  rows={3}
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Write a brief summary of your blog post"
                ></textarea>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  required
                  rows={10}
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Write your blog post content here"
                ></textarea>
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author *
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  required
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter author name"
                />
              </div>

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
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image URL *
                </label>
                <input
                  type="url"
                  id="image_url"
                  name="image_url"
                  required
                  value={formData.image_url}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter image URL"
                />
              </div>

              <div>
                <label htmlFor="read_time" className="block text-sm font-medium text-gray-700 mb-1">
                  Read Time *
                </label>
                <input
                  type="text"
                  id="read_time"
                  name="read_time"
                  required
                  value={formData.read_time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 5 min read"
                />
              </div>

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
                  {isSubmitting ? 'Creating...' : 'Create Blog Post'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPost;