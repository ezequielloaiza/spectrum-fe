import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  itemPerPage: Array<any> = [10, 20, 50, 100];

  @Input() currentPage: number;
  @Input() pages: number;
  @Input() perPage: any;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  // @Output() goPerPage = new EventEmitter<number>();
  @Output() goFirst = new EventEmitter<boolean>();
  @Output() goLast = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(): void {
    this.goNext.emit(true);
  }

  onFirst(): void {
    this.goFirst.emit(true);
  }

  onLast(): void {
    this.goLast.emit(true);
  }

  onPerPage(): void {
    // this.goPerPage.emit(this.perPage);
  }

  isDisabled(event: string): boolean {
    let disabled = false;
    if (event === 'first') {
      return (disabled = Number(this.currentPage) === 1);
    } else {
      return (disabled = Number(this.currentPage) === this.pages);
    }
  }

}
