import { Component, Input } from "@angular/core";
import { IComment } from "src/app/main-page/main";

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input () comments: IComment
}
