import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { RETAIL_DATA } from '../constants';

export const RetailSection: React.FC = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-700 mb-4 flex items-center">
          <span className="text-4xl mr-3 text-blue-600">&#128722;</span>
          Retail Tech: Exorcising Phantom Inventory
        </h2>
        <p className="text-lg text-slate-700 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
          <strong>Context:</strong> Agentic shopping assistants are useless if they purchase products that do not physically exist on the shelf. The race to build "Shelf Intelligence" is currently dominated by heavily flawed optical and data-lag approaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">&#10060;</span> The Current Flaw
          </h3>
          <h4 className="text-lg font-semibold text-red-600 mb-2">The "Hardware Trap" & Lagging Data</h4>
          <p className="text-slate-600 mb-4">
            Competitors are split into two flawed camps: Data-driven agents (Crisp, Increff) relying on lagging ERP data, and Computer Vision innovators (Scandit, Simbe) requiring massive CapEx for robots or ceiling cameras, triggering consumer privacy backlash.
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 font-medium">
            <li><strong>Data Agents:</strong> Blind to real-time physical realities (theft, misplacement).</li>
            <li><strong>Vision Hardware:</strong> Creepy, expensive, and difficult to scale across thousands of locations.</li>
          </ul>
        </div>

        <div className="bg-orange-600 p-8 rounded-xl shadow-xl text-white border-t-4 border-blue-700 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 text-9xl text-orange-500 opacity-50">&#128225;</div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2 text-blue-200">&#10004;</span> Our Strategic Edge
            </h3>
            <h4 className="text-lg font-semibold text-blue-100 mb-2">Camera-Less Spatial AI via Ambient Sensing</h4>
            <p className="text-orange-100 mb-4">
              We utilize the physical infrastructure the retailer already owns: Wi-Fi mesh networks and passive RFID. Analyzing RF backscatter creates a real-time, 3D radar-like map of the store.
            </p>
            <div className="bg-orange-700 bg-opacity-50 p-4 rounded-lg border border-orange-500 mb-4">
              <strong>Behavioral Anomaly Detection:</strong> Tracking the "digital ghost" of a product. If an RF signature moves to a fitting room and vanishes, we flag the exact coordinate instantly.
            </div>
            <p className="font-bold text-lg italic text-blue-100">
              "100% real-time physical accuracy with zero new cameras and zero privacy nightmares."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <h3 className="text-xl font-bold text-center mb-6 text-slate-800">Performance Metrics by Technological Approach</h3>
        <div className="w-full h-[350px] md:h-[400px] max-w-[700px] mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={RETAIL_DATA}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontWeight: 'bold', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} label={{ value: 'Performance Score', angle: -90, position: 'insideLeft' }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#f8fafc' }} />
              <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: '20px' }} />
              <Bar dataKey="accuracy" name="Real-Time Accuracy (%)" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="capex" name="CapEx Efficiency (%)" fill="#ea580c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="privacy" name="Privacy Compliance (%)" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-slate-500 mt-4">
          Comparison of our Ambient Sensing model against Legacy AI and Vision Hardware across Accuracy, Cost Efficiency, and Privacy Safety.
        </p>
      </div>
    </section>
  );
};
