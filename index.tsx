import React from 'react';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { MaritimeSection } from './components/MaritimeSection';
import { RetailSection } from './components/RetailSection';
import { RoadmapSection } from './components/RoadmapSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 space-y-20 w-full">
        <ExecutiveSummary />
        <MaritimeSection />
        <RetailSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
