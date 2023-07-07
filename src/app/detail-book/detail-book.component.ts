import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/backend/book/book.interface';
import { User } from 'src/backend/book/user.interface';
import { HttpGetBookService } from 'src/backend/book/services/http-get-book.service';
import { HttpGetUserService } from 'src/backend/book/services/http-get-user.service';
import { HttpPatchBookService } from 'src/backend/book/services/http-patch-book.service';
import { HttpPostReservationService } from 'src/backend/book/services/http-post-reservation.service';
import { DeleteService } from '../../backend/book/services/http-delete-book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss'],
})
export class DetailBookComponent {
  constructor(
    private httpGetUserService: HttpGetUserService,
    private httpPostReservationService: HttpPostReservationService,
    private httpGetBookService: HttpGetBookService,
    private router: ActivatedRoute,
    private httpPatchBookService: HttpPatchBookService,
    private deleteService: DeleteService
  ) {}
  userSelected: number = -1;
  users!: Array<User> ;
  idLastReservation: number = -1;
  bookId: number = -1;
  book!: Book;
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.bookId = params['id'];
      this.httpGetBookService.bookById(this.bookId).subscribe((book) => {
        this.book = book;
        if (this.book.reservations.length > 0) {
          this.idLastReservation = this.book.reservations[0].id;
        }
      });
      this.getUser()
    });
  }
  onSubmit(id: number) {
    this.httpPostReservationService.postBooks(id,this.userSelected).subscribe((data) => {

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
  getUser(): void {
    this.httpGetUserService.listAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
  selectUser(id:number) {
    console.log(this.userSelected);
    this.userSelected = id;

  }
}

