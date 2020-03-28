import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../models/comment';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  public commentForm: FormGroup = this.createFormGroup();
  @Output() addComment: EventEmitter<Comment> = new EventEmitter();

  constructor(private helper: HelperService) { }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      date: new FormControl()
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.commentForm.get('date').setValue(this.helper.stringToFullDate(Date.now()));
    this.addComment.emit(this.commentForm.value);
    this.commentForm.reset();
  }

}
