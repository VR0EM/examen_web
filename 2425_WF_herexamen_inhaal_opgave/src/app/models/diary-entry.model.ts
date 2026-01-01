export interface DiaryEntry {
  id: number;
  date: string; // ISO date string
  runType: 'Easy' | 'Interval' | 'Threshold' | 'Long' | 'MP' | 'Off';
  actualDistanceKm: number;
  actualDurationMin: number;
  sRPE: number; // 1-10
  notes?: string;
}


