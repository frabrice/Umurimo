import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  image_url: string;
  read_time: string;
  created_at: string;
}

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError('Failed to load blog posts');
    } finally {
      setIsLoading(false);
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
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Resources</h1>
            <p className="text-xl text-white/90">
              Stay updated with the latest trends, best practices, and insights in recruitment and HR.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {error ? (
            <div className="text-center text-red-600">
              {error}
            </div>
          ) : blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.read_time}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-600">Check back later for new content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest insights and trends delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;