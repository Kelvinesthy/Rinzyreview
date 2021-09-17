import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.services";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  username
  password
  mouseoverlogin
  constructor(private authservice: AuthService, private router: Router){}

  login(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.authservice.getUserDetails(username, password).subscribe(data => {
      if(data.success){
        //redirect the peron to admin
        this.router.navigate(['user/admin'])
        this.authservice.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
    console.log(username, password)
  }
  cancel(){
    this.router.navigate(['/home'])
  }
}
