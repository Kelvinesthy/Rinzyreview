import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient } from '@angular/common/http';
import { myData } from './myData'

@Injectable()

export class AuthService{

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value

  }

  get isLoggedIn() {
    return this.loggedInStatus //using toString coz im jSon parsing this isLoddegIn
  }

  currentUser: IUser
  loginUser (userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: 'Arinzy',
      lastName: 'Rinzy'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
  getUserDetails(username, password){
    //Post these details to API server return user info if correct
    return this.http.post<myData>("/api/auth.php", {
      username,
      password
    })
  }

}
