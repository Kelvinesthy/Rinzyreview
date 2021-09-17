import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Main } from '../main-page/main';
import { MainService } from '../main-page/main.service';

@Component({
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {
  @Input() article: Main;
  addMode:boolean

  constructor(private mainService: MainService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.article = this.mainService.getArticle(this.route.snapshot.params['heading'])
  }
  addComment(){
    this.addMode=true
  }
  cancelAddComment(){
    this.addMode = false
  }
}
