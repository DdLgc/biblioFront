import { Component } from '@angular/core';
import { Book } from 'src/backend/book/book.interface';
import { HttpGetBookService } from 'src/backend/book/services/http-get-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private httpGetBookService: HttpGetBookService) {

  }
  bookList!: Book[]
  ngOnInit(): void {
    this.httpGetBookService.listAllBooks().subscribe(books =>{
      this.bookList = books
    })
  }
}
