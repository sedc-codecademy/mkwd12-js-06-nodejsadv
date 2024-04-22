export enum Currency {
  MKD = 'MKD',
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
}

export enum Status {
  PLANNING = 'PLANNING',
  BOOKED = 'BOOKED',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}
export interface Budget {
  amount: number;
  currency: Currency;
}

export interface Trip {
  id: string;
  budget: Budget;
  destination: string;
  notes: string;
  status: Status;
  startDate: number; // Timestamp
  endDate: number; // Timestamp
  createdAt: number; // Timestamp
  updatedAt: number | null; // Timestamp
}

export interface TripCreationProps {
  budget: Budget;
  destination: string;
  notes: string;
  status: Status;
  startDate: number; // Timestamp
  endDate: number; // Timestamp
}
