import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditorModule, TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ArticleContentComponent } from './article-content/article-content.component';
import { AuthService } from './user/auth.services';
import { MainService } from './main-page/main.service';
import { ArticleRouteActivator } from './article-content/article-route-activator.service';
import { ArticleListResolver } from './article-content/article-list-resolver.service';
import { MainDetailsComponent } from './main-page/main-details.component';
import {Error404Component } from './errors/404.component';
import { CommentListComponent } from './article-content/comment/comment-list.componet';
import { CreateCommentComponent } from './article-content/comment/create-comment.component';
import { HttpClientModule } from '@angular/common/http';
import { GenerateArticleComponent } from './generate-article/generate-article.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PaginationComponent,
    ArticleContentComponent,
    MainDetailsComponent,
    Error404Component,
    CommentListComponent,
    CreateCommentComponent,
    GenerateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule
  ],
  providers: [
    AuthService,
    MainService,
    ArticleRouteActivator,
    ArticleListResolver,
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  exports: [
    GenerateArticleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: GenerateArticleComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this Article, do you really want to cancel?')
  return true
}
