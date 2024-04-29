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
  destination: string;
  notes: string;
  status: Status;
  startDate: number; // Timestamp
  endDate: number; // Timestamp
  createdAt: number; // Timestamp
  updatedAt: number | null; // Timestamp
}

export interface TripCreationProps {
  budget: Budget; // req.body ke stigne budget vrednost
  destination: string;
  notes: string;
  status: Status;
  startDate: number; // Timestamp
  endDate: number; // Timestamp
}

export type UpdateTripProps = Partial<TripCreationProps>;

export type TripToUpdate = Partial<Trip>;
// type TestType = Pick<TripCreationProps, 'budget' | 'notes' | 'startDate'>;
