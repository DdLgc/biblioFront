import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { DetailBookComponent } from './detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListBooksComponent,
    DetailBookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
