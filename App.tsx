import { MaritimeDataPoint, RetailDataPoint, RoadmapDataPoint } from './types';

export const MARITIME_DATA: MaritimeDataPoint[] = [
  { subject: 'Data Privacy & Security', ourEdge: 100, legacy: 20 },
  { subject: 'Global Network Optimization', ourEdge: 95, legacy: 80 },
  { subject: 'Speed of Enterprise Adoption', ourEdge: 90, legacy: 40 },
  { subject: 'Low Capital Expenditure', ourEdge: 95, legacy: 50 },
  { subject: 'Real-time Algorithmic Agility', ourEdge: 100, legacy: 60 },
];

export const RETAIL_DATA: RetailDataPoint[] = [
  { name: 'Legacy ERP Agents', accuracy: 60, capex: 80, privacy: 90 },
  { name: 'Computer Vision Hardware', accuracy: 95, capex: 15, privacy: 20 },
  { name: 'Ambient Sensing (Our Edge)', accuracy: 98, capex: 95, privacy: 100 },
];

export const ROADMAP_DATA: RoadmapDataPoint[] = [
  { name: 'Phase 1: Proof of Value', ourApproach: 10, legacyApproach: 5 },
  { name: 'Phase 2: Integration', ourApproach: 45, legacyApproach: 15 },
  { name: 'Phase 3: Scaling', ourApproach: 120, legacyApproach: 35 },
  { name: 'Phase 4: Autonomous', ourApproach: 250, legacyApproach: 60 },
];
