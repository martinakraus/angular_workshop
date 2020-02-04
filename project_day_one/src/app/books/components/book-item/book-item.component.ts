import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() sendTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendBookTitle() {
    this.sendTitle.emit(this.book.title);
  }
}
