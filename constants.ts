export interface MaritimeDataPoint {
  subject: string;
  ourEdge: number;
  legacy: number;
}

export interface RetailDataPoint {
  name: string;
  accuracy: number;
  capex: number;
  privacy: number;
}

export interface RoadmapDataPoint {
  name: string;
  ourApproach: number;
  legacyApproach: number;
}
