import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { DetailBookComponent } from './detail-book/detail-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'list-books', component: ListBooksComponent  },
  { path: 'detail-book/:id', component: DetailBookComponent   }
  // { path: '', redirectTo: 'home', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Routes spécifique en haut et + global en bas

