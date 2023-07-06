import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/backend/book/book.interface';
import { HttpGetBookService } from 'src/backend/book/services/http-get-book.service';
import { HttpPatchBookService } from 'src/backend/book/services/http-patch-book.service';
import { HttpPostReservationService } from 'src/backend/book/services/http-post-reservation.service';
import { DeleteService } from '../../backend/book/services/delete.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss'],
})
export class DetailBookComponent {
  constructor(
    private httpPostReservationService: HttpPostReservationService,
    private httpGetBookService: HttpGetBookService,
    private router: ActivatedRoute,
    private httpPatchBookService: HttpPatchBookService,
    private deleteService: DeleteService
  ) {}
  idLastReservation: number = -1;
  bookId: number = -1;
  book!: Book;
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.bookId = params['id'];
      this.httpGetBookService.bookById(this.bookId).subscribe((book) => {
        this.book = book;

        if (this.book.reservations.length > 0) {
          this.idLastReservation = this.book.reservations[0].id
        }
      });
    });
  }
  onSubmit(id: number) {
    this.httpPostReservationService.postBooks(id).subscribe((data) => {
      this.idLastReservation = data.id;
    });
    this.httpPatchBookService
      .patchBooks(id, this.book.isReserved)
      .subscribe((data) => {
        this.httpGetBookService.bookById(this.bookId).subscribe((book) => {
          this.book = book;
        });
      });
  }

  deleteBook(id: number): void {
    this.deleteService.deleteBook(id).subscribe((data) => {
      this.httpPatchBookService
        .patchBooks(this.bookId, this.book.isReserved)
        .subscribe((data) => {
          this.httpGetBookService.bookById(this.bookId).subscribe((book) => {
            this.book = book;
          });
        });
    });
  }
}
