import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-9 w-9 rounded-md overflow-hidden">
      <img 
        src="https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/KyQIJPUo_400x400.png"
        alt="Logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;