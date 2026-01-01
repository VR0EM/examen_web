export interface Order {
  id?: number;
  name: string;
  items: number[];
  status?: string;
  timestamp?: string;
}
