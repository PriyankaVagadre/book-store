import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.scss']
})
export class BookCategoryComponent implements OnInit {
  public navigations = [
    { category: "fiction" },
    { category: "drama" },
    { category: "humor" },
    { category: "politics" },
    { category: "philosophy" },
    { category: "history" },
    { category: "adventure" }
  ]



  constructor() { }

  ngOnInit() {
  }

}
