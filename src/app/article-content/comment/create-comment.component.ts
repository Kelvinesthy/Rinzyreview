import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IComment } from "../../main-page/main";

@Component({
  selector: 'comment-root',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit{
  @Output() saveNewComment = new EventEmitter()
  @Output() cancelAddComment = new EventEmitter()

  newCommentForm: FormGroup
  name: FormControl
  email: FormControl
  commentdetail: FormControl

  ngOnInit(){
    this.name = new FormControl('', Validators.required)
    this.email = new FormControl('', Validators.required)
    this.commentdetail = new FormControl('', [Validators.required, Validators.maxLength(400)])

    this.newCommentForm = new FormGroup ({
      name: this.name,
      email: this.email,
      commentdetail: this.commentdetail
    })
  }
  saveComment(formValues){
    let comment: IComment = {
      name: formValues.name,
      email: formValues.email,
      commentdetail: formValues.commentdetail
    }
    this.saveNewComment.emit(comment)
  }
  cancel(){
    this.cancelAddComment.emit()
  }
}
