import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { HttpGetBookService } from 'src/backend/book/services/http-get-book.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpPatchBookService } from 'src/backend/book/services/http-patch-book.service';
import { HttpPostReservationService } from 'src/backend/book/services/http-post-reservation.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListBooksComponent,
    DetailBookComponent
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [HttpGetBookService, HttpPatchBookService, HttpPostReservationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
