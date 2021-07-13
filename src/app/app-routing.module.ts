import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCategoryComponent } from './book-category/book-category.component';
import { SelectedBookListingComponent } from './selected-book-listing/selected-book-listing.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full',
  },
  {
    path: 'category',
    component: BookCategoryComponent,
  },
  {
    path: 'listing/:selectedCategory',
    component: SelectedBookListingComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
