export type Advantage = {
  title: string;
  description: string;
};

export type Trip = {
  id: number;
  photoUrl: string;
  title: string;
  subtitle: string;
  countries: string[];
  days: number;
  co2kilograms: number;
  rating: number;
  description: string;
  advantages: Advantage[];
};
export type FetchTripsResponse = {
  trips: Trip[];
  totalPages: number;
};
