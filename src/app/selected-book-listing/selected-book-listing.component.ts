import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book.model';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-selected-book-listing',
  templateUrl: './selected-book-listing.component.html',
  styleUrls: ['./selected-book-listing.component.scss']
})
export class SelectedBookListingComponent implements OnInit {
  category: string;
  book: any;
  selectedCatagory: any;
  public searchForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, 
    private readonly configService: ConfigService,
    private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchText: [null],
    })
   }

  ngOnInit() {
    this.selectedCatagory = [];
    this.category = this.activatedRoute.snapshot.paramMap.get('selectedCategory')
    this.configService.getConfig().subscribe((book: any) => {
      this.book = { ...book }
      if(!!this.book){
        let selectedCategoryList =
        this.selectedCatagory = this.book.results.filter(element=> element.subjects.some(e => e.toLowerCase().includes(this.category)))
      }
    });
    this.searchForm.get('searchText').valueChanges.subscribe(val => {
      if(val === ""){
        this.selectedCatagory = this.book.results.filter(element=> element.subjects.some(e => e.toLowerCase().includes(this.category)));
      }
      else{
        this.selectedCatagory = this.selectedCatagory.filter((res)=> 
        res.title.toLowerCase().includes(val)
        )
      }
    });


  }

}
