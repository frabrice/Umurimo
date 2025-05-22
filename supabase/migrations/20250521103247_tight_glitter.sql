/*
  # Initial Schema Setup

  1. New Tables
    - `jobs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `company` (text)
      - `description` (text)
      - `location` (text)
      - `type` (text)
      - `category` (text)
      - `experience_level` (text)
      - `benefits` (text[])
      - `skills` (text[])
      - `deadline` (timestamptz)
      - `featured` (boolean)
      - `application_url` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `user_id` (uuid, foreign key)

    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `excerpt` (text)
      - `content` (text)
      - `author` (text)
      - `category` (text)
      - `image_url` (text)
      - `read_time` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `user_id` (uuid, foreign key)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage their own data
    - Allow public read access to both tables
*/

-- Jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  type text NOT NULL,
  category text NOT NULL,
  experience_level text NOT NULL,
  benefits text[] NOT NULL DEFAULT '{}',
  skills text[] NOT NULL DEFAULT '{}',
  deadline timestamptz NOT NULL,
  featured boolean NOT NULL DEFAULT false,
  application_url text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  user_id uuid NOT NULL REFERENCES auth.users(id)
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  read_time text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  user_id uuid NOT NULL REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policies for jobs table
CREATE POLICY "Allow public read access to jobs"
  ON jobs
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create jobs"
  ON jobs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to update their own jobs"
  ON jobs
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to delete their own jobs"
  ON jobs
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for blog_posts table
CREATE POLICY "Allow public read access to blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to update their own blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to delete their own blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);