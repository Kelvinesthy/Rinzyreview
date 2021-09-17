import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleContentComponent } from './article-content/article-content.component';
import { ArticleListResolver } from './article-content/article-list-resolver.service';
import { ArticleRouteActivator } from './article-content/article-route-activator.service';
import { CreateCommentComponent } from './article-content/comment/create-comment.component';
import { Error404Component } from './errors/404.component';
import { GenerateArticleComponent } from './generate-article/generate-article.component';
import { MainPageComponent } from './main-page/main-page.component';

import { } from './user/user.module';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent, resolve: {articles: ArticleListResolver}},
  {path: 'articles/:heading', component: ArticleContentComponent, canActivate: [ArticleRouteActivator]},
  {path: 'articles/comment/new', component: CreateCommentComponent},
  {path: 'user', loadChildren:'./user/user.module#UserModule'},
  {path: '404', component: Error404Component},
  {path: 'newarticles', component: GenerateArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
