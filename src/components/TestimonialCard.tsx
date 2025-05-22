import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  image,
  quote,
}) => {
  return (
    <div className="card p-6 md:p-8 flex flex-col h-full">
      <div className="relative mb-6">
        <Quote className="absolute top-0 left-0 h-10 w-10 text-primary/20" />
      </div>
      <p className="text-gray-600 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;