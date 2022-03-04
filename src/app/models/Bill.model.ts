export type BillFrequencyType = 'weekly' | 'monthly' | 'bi-weekly';

export interface Bill {
  name: string;
  amount: number;
  frequency: BillFrequencyType;
  date: number;
}
