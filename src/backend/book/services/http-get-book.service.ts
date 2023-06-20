import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Book } from '../book.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpGetBookService {

  constructor(private httpClient: HttpClient) { }
  listAllBooks(): Observable<any> {
    return this.httpClient.get('http://localhost/Biblio/public/index.php/api/books.json')
  }
}
