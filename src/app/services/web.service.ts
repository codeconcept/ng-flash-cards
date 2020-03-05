import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  BASE_URL = 'http://localhost:3000';
  cards = [];
  error = null;

  constructor(private http: HttpClient) {
    this.getCards()
      .subscribe(data => {
        this.cards = data;
        console.log('cards', this.cards);
      }, error => {
          this.error = error;
          console.error(error);
      });
  }

  getCards() {
    return this.http.get<Card[]>(`${this.BASE_URL}/cards`);
  }
}
