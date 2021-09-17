import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Main } from './main';
import { MainService } from './main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  article: Main[]

  constructor( private mainServices: MainService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.article = this.route.snapshot.data['articles']
  }

}
