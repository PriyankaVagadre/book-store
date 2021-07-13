import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { RouterModule } from '@angular/router';
import { SelectedBookListingComponent } from './selected-book-listing/selected-book-listing.component';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    BookCategoryComponent,
    SelectedBookListingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
