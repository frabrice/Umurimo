export interface JobPost {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  type: string;
  category: string;
  experienceLevel: string;
  benefits: string[];
  posted: string;
  deadline: string;
  skills: string[];
  featured: boolean;
  applicationUrl: string;
}

export const jobPosts: JobPost[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechInnovate',
    description: 'We are seeking an experienced Frontend Developer to join our growing team. You will be responsible for building user interfaces for web applications, optimizing user experience, and collaborating with designers and backend developers.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Engineering',
    experienceLevel: 'Senior Level',
    benefits: ['Remote Work Options', 'Health Insurance', 'Professional Development', 'Flexible Hours'],
    posted: '2 days ago',
    deadline: 'June 30, 2025',
    skills: ['React', 'TypeScript', 'CSS', 'Redux', 'Webpack', 'Jest'],
    featured: true,
    applicationUrl: 'https://techinnovate.com/careers/senior-frontend-developer'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'DesignHub',
    description: 'DesignHub is looking for a talented UX/UI Designer to create amazing user experiences. The ideal candidate should have a strong portfolio showcasing their design skills and ability to solve complex user problems.',
    location: 'Remote',
    type: 'Full-time',
    category: 'Design',
    experienceLevel: 'Mid-Senior Level',
    benefits: ['Flexible Schedule', 'Health & Dental', 'Stock Options', 'Learning Budget'],
    posted: '1 week ago',
    deadline: 'July 15, 2025',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping', 'User Research'],
    featured: true,
    applicationUrl: 'https://designhub.com/jobs/ux-ui-designer'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudScale',
    description: 'Join our DevOps team to build and maintain our cloud infrastructure. You will be responsible for implementing CI/CD pipelines, monitoring systems, and ensuring the reliability and security of our services.',
    location: 'Boston, MA',
    type: 'Full-time',
    category: 'Engineering',
    experienceLevel: 'Senior Level',
    benefits: ['Competitive Package', 'Remote Work', '401(k) Match', 'Health Benefits'],
    posted: '3 days ago',
    deadline: 'June 25, 2025',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Linux'],
    featured: false,
    applicationUrl: 'https://cloudscale.com/careers/devops-engineer'
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'InnovateTech',
    description: 'We are looking for a Product Manager to lead the development of our SaaS platform. You will work closely with engineering, design, and marketing teams to deliver features that delight our users.',
    location: 'New York, NY',
    type: 'Full-time',
    category: 'Product',
    experienceLevel: 'Lead Level',
    benefits: ['Equity Package', 'Health & Wellness', 'Remote Work', 'Learning Budget'],
    posted: '5 days ago',
    deadline: 'July 10, 2025',
    skills: ['Product Strategy', 'Agile', 'User Stories', 'Roadmapping', 'Data Analysis'],
    featured: false,
    applicationUrl: 'https://innovatetech.com/jobs/product-manager'
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'DataInsights',
    description: 'DataInsights is seeking a Data Scientist to join our analytics team. You will analyze complex datasets, build predictive models, and present insights to stakeholders across the organization.',
    location: 'Chicago, IL',
    type: 'Full-time',
    category: 'Data',
    experienceLevel: 'Mid-Senior Level',
    benefits: ['Flexible Hours', 'Health Coverage', '401(k)', 'Professional Development'],
    posted: '1 day ago',
    deadline: 'July 5, 2025',
    skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Statistics'],
    featured: true,
    applicationUrl: 'https://datainsights.com/careers/data-scientist'
  },
  {
    id: 6,
    title: 'Backend Engineer',
    company: 'ServeScale',
    description: 'ServeScale is looking for a Backend Engineer to build and scale our API services. You will design, implement, and maintain server-side applications that power our platform.',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    experienceLevel: 'Mid Level',
    benefits: ['Remote First', 'Health Insurance', 'Learning Allowance', 'Flexible PTO'],
    posted: '4 days ago',
    deadline: 'June 28, 2025',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST APIs', 'Microservices'],
    featured: false,
    applicationUrl: 'https://servescale.com/careers/backend-engineer'
  }
];