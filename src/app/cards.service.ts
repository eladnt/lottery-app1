import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CardsService {

  constructor(private http: Http) { }
      // Get all posts from the API
    getAllCards() {
      return this.http.get('/api/cards')
        .map(res => res.json());
    }
  }
