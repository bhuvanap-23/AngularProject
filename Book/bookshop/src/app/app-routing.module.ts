import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';

const routes: Routes = [
  {path:'',redirectTo:'bookstore', pathMatch:'full'},
  {path:'bookstore',component:BookstoreComponent},
  {path:'books-list',component:BooksListComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'edit-book/:id',component:BookDetailComponent},
  {path:'about',component:AboutComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
