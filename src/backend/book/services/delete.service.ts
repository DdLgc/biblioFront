import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) {}

    deleteBook(id: number): Observable<any> {
    const url = `http://localhost/Biblio/public/index.php/api/reservations/${id}`;
    return this.http.delete(url);
    }
}



