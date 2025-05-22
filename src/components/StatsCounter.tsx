import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
  number: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  number,
  label,
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = Math.ceil(number / (duration / 16)); // 16ms is roughly one frame at 60fps

    const timer = setInterval(() => {
      start += step;
      if (start > number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [inView, number, duration]);

  const formattedCount = new Intl.NumberFormat().format(count);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {formattedCount}
        {suffix}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
};

export default StatsCounter;