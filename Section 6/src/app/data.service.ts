import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(usersUrl).pipe(
      tap(data => console.log(data)),
      map(response => {
        return {
          users: response,
        };
      }),
      tap(data => console.log(data))
    );
  }
}
