import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  addMode:boolean
  message = "Admin loading"
  constructor( private user: UserService) { }

  ngOnInit(): void {
    this.user.getSomeData().subscribe(data => {
      this.message = data.message
    })
  }
  addArticle(){
    this.addMode = true
  }

}
