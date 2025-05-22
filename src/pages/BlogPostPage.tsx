import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  read_time: string;
  created_at: string;
}

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlogPost();
  }, [id]);

  const fetchBlogPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError('Failed to load blog post');
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

  if (error || !post) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Blog post not found</h1>
            <p className="mt-2 text-gray-600">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="mt-4 inline-flex items-center text-primary hover:text-primary-dark">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section with Featured Image */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image_url})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-end">
          <div className="relative text-white pb-16">
            <div className="mb-4">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {new Date(post.created_at).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.read_time}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;