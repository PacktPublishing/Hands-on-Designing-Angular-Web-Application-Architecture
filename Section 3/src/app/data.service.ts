import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(usersUrl);
  }
}
