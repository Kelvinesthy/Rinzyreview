import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `
  <h1 class="errorMessage">This site doesn't not exist</h1>
  <div class="container">
    <button type="button" class="btn btn-primary" (click)='backPage()'> Go back to Homepage
    </button>
  </div>`,
  styles: [`
  .errorMessage {
    margin-top: 150px;
    font-size: 170px;
    text-align: center;
  }
  @media only screen and (max-width: 767px){
    .errorMessage{
      font-size: 80px
    }
  `]
})

export class Error404Component{

  constructor(private router: Router){}
  backPage(){
    this.router.navigate(['/home'])
  }
}
