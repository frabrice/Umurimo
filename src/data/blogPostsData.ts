export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Remote Work in Tech Recruitment',
    excerpt: 'Explore how remote work is reshaping the tech recruitment landscape and what it means for both employers and candidates.',
    content: `Remote work has fundamentally changed how companies approach recruitment in the tech industry. This shift has opened up new opportunities for both employers and candidates, breaking down geographical barriers and expanding the talent pool globally.

Organizations are now able to access talent from anywhere in the world, while candidates have more opportunities than ever before. However, this transformation also brings new challenges in areas such as remote interviewing, virtual onboarding, and maintaining company culture in a distributed environment.

In this article, we'll explore:
- The impact of remote work on tech recruitment
- Best practices for remote hiring
- Challenges and solutions in virtual onboarding
- Building and maintaining culture in remote teams
- Future trends in remote work and recruitment`,
    author: 'Sarah Johnson',
    date: 'March 15, 2025',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Recruitment Trends'
  },
  {
    id: 2,
    title: 'Building an Inclusive Hiring Process',
    excerpt: 'Learn effective strategies for creating an inclusive hiring process that attracts diverse talent and promotes workplace equality.',
    content: `Creating an inclusive hiring process is essential for building diverse and high-performing teams. This comprehensive guide explores practical steps organizations can take to eliminate bias and promote equality in their recruitment practices.

We'll cover:
- Understanding unconscious bias in recruitment
- Writing inclusive job descriptions
- Implementing structured interviews
- Creating diverse interview panels
- Measuring and improving diversity metrics

By following these strategies, organizations can create a more equitable hiring process that attracts and retains diverse talent.`,
    author: 'Michael Chen',
    date: 'March 12, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Diversity & Inclusion'
  }
];