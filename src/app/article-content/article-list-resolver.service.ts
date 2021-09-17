import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs/operators";
import { MainService } from "../main-page/main.service";

@Injectable()

export class ArticleListResolver implements Resolve <any> {

constructor (private mainService: MainService){} //This makes sure the page loads altogether before passsing it to the page

  resolve(){
    return this.mainService.getArticles().pipe(map(articles => articles))
  }
}
