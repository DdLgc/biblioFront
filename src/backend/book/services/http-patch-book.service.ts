import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Book } from '../book.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPatchBookService {

  constructor(private httpClient: HttpClient) { }
  patchBooks(id: number, isReserved: boolean): Observable<any> {
    let body = {
      isReserved: !isReserved
    }

    return this.httpClient.patch('http://localhost/Biblio/public/index.php/api/reservations/'+id,body)
  }
}

