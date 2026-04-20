import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import { MARITIME_DATA } from '../constants';

export const MaritimeSection: React.FC = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <span className="text-4xl mr-3 text-orange-600">&#9973;</span>
          Maritime Tech: The Empty Container Paradox
        </h2>
        <p className="text-lg text-slate-700 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
          <strong>Context:</strong> The global maritime industry loses billions shipping empty containers. Competitors like MatchLog and CGI are building macro-level digital twins, but their models depend on fierce shipping rivals (Maersk, MSC, COSCO) pooling highly sensitive routing data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">&#10060;</span> The Current Flaw
          </h3>
          <h4 className="text-lg font-semibold text-red-600 mb-2">The "Trust Deficit" & Data Silos</h4>
          <p className="text-slate-600 mb-4">
            Current solutions require carriers to upload proprietary data to a centralized cloud. Because these global giants are fierce rivals, they refuse to share manifest data for fear of losing their competitive edge. The global network remains fractured and unoptimized.
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 font-medium">
            <li><strong>MatchLog:</strong> Requires platform lock-in.</li>
            <li><strong>Transmetrics:</strong> Centralized AI predicting via macro data.</li>
            <li><strong>CGI MaritimeTwin:</strong> Heavy, centralized satellite architecture.</li>
          </ul>
        </div>

        <div className="bg-blue-800 p-8 rounded-xl shadow-xl text-white border-t-4 border-orange-500 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 text-9xl text-blue-700 opacity-50">&#127760;</div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2 text-orange-400">&#10004;</span> Our Strategic Edge
            </h3>
            <h4 className="text-lg font-semibold text-orange-300 mb-2">Federated AI & Micro-Incentive Tokenization</h4>
            <p className="text-blue-100 mb-4">
              We deploy AI models locally behind each carrier's firewall. The AI learns patterns and only transmits "mathematical learnings" back to our central twin—never the proprietary data.
            </p>
            <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg border border-blue-600 mb-4">
              <strong>The "Seat Exchange":</strong> An automated micro-bidding marketplace. Our AI autonomously negotiates real-time micro-leases between rivals.
            </div>
            <p className="font-bold text-lg italic text-orange-400">
              "We optimize the global network without ever seeing your proprietary data."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <h3 className="text-xl font-bold text-center mb-6 text-slate-800">Architectural Comparison: Legacy vs. Federated AI</h3>
        <div className="w-full h-[350px] md:h-[400px] max-w-[700px] mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={MARITIME_DATA}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 'bold' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Tooltip />
              <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: '20px' }} />
              <Radar
                name="Our Edge (Federated AI)"
                dataKey="ourEdge"
                stroke="#ea580c"
                strokeWidth={3}
                fill="#ea580c"
                fillOpacity={0.2}
              />
              <Radar
                name="Legacy Competitors"
                dataKey="legacy"
                stroke="#1d4ed8"
                strokeWidth={2}
                fill="#1d4ed8"
                fillOpacity={0.2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-slate-500 mt-4">
          Visualizing the multidimensional superiority of a zero-data-sharing approach across critical enterprise adoption metrics.
        </p>
      </div>
    </section>
  );
};
