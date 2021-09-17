import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main-page/main.service';
import { AuthService } from '../user';

@Component({
  selector: 'generate-article',
  templateUrl: './generate-article.component.html',
  styleUrls: ['./generate-article.component.css']
})
export class GenerateArticleComponent implements OnInit {

  @Output() saveNewArticle = new EventEmitter()

  newArticle
  isDirty: boolean=true
  constructor( private router: Router,
    public auth: AuthService,
    private mainservice: MainService) { }

  ngOnInit(): void {
  }
  saveArticle(formValues){
    this.mainservice.saveArticle(formValues)
    this.isDirty = false
    this.router.navigate(['/articles'])
    this.saveNewArticle.emit()
  }

  cancel (){
    this.router.navigate(['/articles'])
  }

}
