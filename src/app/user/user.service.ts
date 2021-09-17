import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myData } from './myData';
import { isLoggedIn } from './isLoggedIn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }
}
