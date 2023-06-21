import { User } from './user.interface';

export interface Reservation {
  returnDateInitial: Date;
  loanDate: Date;
  idBook: number;
  reelReturnDate?: Date;
  user: User;
}
