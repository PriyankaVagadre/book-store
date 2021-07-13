import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';

@Injectable()
export class ConfigService {
 configUrl = 'http://skunkworks.ignitesol.com:8000/books';

  constructor(private http: HttpClient) {
   }

   getConfig() {
    return this.http.get<Book>(this.configUrl);
  }
}