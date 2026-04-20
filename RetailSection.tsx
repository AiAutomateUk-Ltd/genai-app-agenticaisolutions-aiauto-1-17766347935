import React from 'react';

export const ExecutiveSummary: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 mb-4 border-b-2 border-orange-500 pb-2 inline-block">
        Executive Context
      </h2>
      <p className="text-lg leading-relaxed text-slate-700">
        The 2025-2026 technological landscape is defined by <strong>Agentic AI</strong> and <strong>Spatial Computing</strong> tackling massive physical-world inefficiencies. While tech giants and well-funded startups are rushing into the "Empty Container Paradox" and the "Phantom Inventory Illusion," their solutions are bottlenecked by fatal structural flaws: data privacy demands and exorbitant hardware CapEx. Our business case proposes a decentralized, hardware-agnostic architecture designed to bypass these barriers entirely.
      </p>
    </section>
  );
};
