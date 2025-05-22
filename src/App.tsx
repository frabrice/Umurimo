import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobPostsPage from './pages/JobPostsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import HowItWorksPage from './pages/HowItWorksPage';
import JobApplicationPage from './pages/JobApplicationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import CreateJobPost from './pages/CreateJobPost';
import CreateBlogPost from './pages/CreateBlogPost';
import { AuthProvider, useAuth } from './context/AuthContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<JobPostsPage />} />
              <Route path="/job-posts" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/apply/:jobId" element={<JobApplicationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/create-job"
                element={
                  <PrivateRoute>
                    <CreateJobPost />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/create-blog"
                element={
                  <PrivateRoute>
                    <CreateBlogPost />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App