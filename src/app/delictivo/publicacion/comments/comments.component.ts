import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CommentService } from '../services/comment.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments$: Observable<Comment[]>;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.getAllComments();
  }
}
