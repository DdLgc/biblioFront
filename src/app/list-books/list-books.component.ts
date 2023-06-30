import { HttpPostReservationService } from './../../backend/book/services/http-post-reservation.service';
import { Component } from '@angular/core';
import { Book } from 'src/backend/book/book.interface';
import { HttpGetBookService } from 'src/backend/book/services/http-get-book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
})
export class ListBooksComponent {
  constructor(
    private httpGetBookService: HttpGetBookService,
    private httpPostReservationService: HttpPostReservationService
  ) {}
  bookList!: Book[];
  ngOnInit(): void {
    this.httpGetBookService.listAllBooks().subscribe((books) => {
      this.bookList = books;
    });
  }
}
