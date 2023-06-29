
// set up text to print, each item in array is new line
const aText: string[] = [
  "Bienvenue à la Bibliothèque des vieux livres",
  "vieux vieux, ça depend lesquelles"
];
const iSpeed: number = 100; // time delay of print out
let iIndex: number = 0; // start printing array at this position
let iArrLength: number = aText[0].length; // the length of the text array
const iScrollAt: number = 20; // start scrolling up at this many lines

let iTextPos: number = 0; // initialise text position
let sContents: string = ''; // initialise contents variable
let iRow: number; // initialise current row

function typewriter(): void {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  const destination = document.getElementById("typedtext");

  if (destination !== null) {
    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ === iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex !== aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(typewriter, iSpeed);
    }
  }
}

typewriter();










import { HttpPostReservationService } from './../../backend/book/services/http-post-reservation.service';
import { Component } from '@angular/core';
import { Book } from 'src/backend/book/book.interface';
import { HttpGetBookService } from 'src/backend/book/services/http-get-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private httpGetBookService: HttpGetBookService, private httpPostReservationService: HttpPostReservationService) {

  }
  bookList!: Book[]
  ngOnInit(): void {
    this.httpGetBookService.listAllBooks().subscribe(books =>{
      this.bookList = books
    })
  }
}
