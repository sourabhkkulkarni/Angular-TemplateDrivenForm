import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url = '';
  constructor(private http: HttpClient) {}

  // register Created User
  register(user: User) {
   return  this.http.post<any>(this.url, user);
  }
}
