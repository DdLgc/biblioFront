import { Reservation } from "./reservation.interface";

export interface Book {
  id: number;
  title: string;
  autor: string;
  description: string;
  url: string;
  isReserved: boolean;
  reservations: Reservation[];
}
