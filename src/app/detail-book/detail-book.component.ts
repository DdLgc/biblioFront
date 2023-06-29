import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/backend/book/book.interface';
import { HttpGetBookService } from 'src/backend/book/services/http-get-book.service';
import { HttpPatchBookService } from 'src/backend/book/services/http-patch-book.service';
import { HttpPostReservationService } from 'src/backend/book/services/http-post-reservation.service';

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
    private httpPatchBookService: HttpPatchBookService
  ) {}
  bookId: number = -1;
  book!: Book;
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.bookId = params['id'];
      this.httpGetBookService.bookById(this.bookId).subscribe((book) => {
        this.book = book;
      });
    });
  }
  onSubmit(id:number){

    this.httpPostReservationService.postBooks(id).subscribe()
    this.httpPatchBookService.patchBooks(id,this.book.isReserved).subscribe(data => {
      this.httpGetBookService.bookById(this.bookId).subscribe((book) => {
        this.book = book;
      });
    })
  }
}
