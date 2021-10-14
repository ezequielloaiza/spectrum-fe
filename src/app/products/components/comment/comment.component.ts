import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() product: any;
  @Input() attribute: any;
  @Input() enableField: boolean;

  constructor() { }

  ngOnInit() {
  }

}
