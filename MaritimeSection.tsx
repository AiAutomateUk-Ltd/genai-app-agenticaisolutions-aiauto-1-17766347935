import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white py-16 px-6 shadow-md border-b-4 border-orange-600">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Disrupting Physical-World Paradigms
        </h1>
        <p className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl">
          The Agentic AI Edge: Outmaneuvering legacy tech in Global Logistics and Retail.
        </p>
      </div>
    </header>
  );
};
