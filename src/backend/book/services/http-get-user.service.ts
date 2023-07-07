import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpGetUserService {
  constructor(private httpClient: HttpClient) {}

  listAllUsers(): Observable<any> {
    return this.httpClient.get(
      'http://localhost/Biblio/public/index.php/api/users.json'
    );
  }

  userById(id: number): Observable<any> {
    return this.httpClient.get(
      'http://localhost/Biblio/public/index.php/api/users/' + id + '.json'
    );
  }
}
