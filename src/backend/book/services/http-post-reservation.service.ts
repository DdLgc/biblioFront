import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Book } from '../book.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPostReservationService {

  constructor(private httpClient: HttpClient) { }
  postBooks(id: number): Observable<any> {
    let returnDateInitial = new Date();
    returnDateInitial.setDate(returnDateInitial.getDate() + 30);
    let body = {
      returnDateInitial: returnDateInitial,
      loanDate: new Date(),
      idBook: [
        "api/books/"+id
      ],
      user: "api/users/1"
    }

    return this.httpClient.post('http://localhost/Biblio/public/index.php/api/reservations',body)
  }
}

