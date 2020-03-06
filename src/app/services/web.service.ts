import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../interfaces/card';
import { Answer } from '../interfaces/answer';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  private BASE_URL = 'http://localhost:3000';
  cards = [];
  error = null;
  answers = [];

  constructor(private http: HttpClient) {
    this.getCards();
  }

  getCards() {
    this.http.get<Card[]>(`${this.BASE_URL}/cards`)
      .subscribe(data => {
        this.cards = data;
        console.log('cards', this.cards);
        this.answers = [];
      }, error => {
          this.error = error;
          console.error(error);
      });
  }

  saveAnswer(answer) {
    this.answers = [...this.answers, answer];
    console.log('all answers', this.answers);
  }

  reset() {
    return this.http.post<{ reset: true }>(`${this.BASE_URL}/cards/reset`, { reset: true });
  }

  get allCardsAnswered() {
    return this.answers.length === this.cards.length;
  }

  saveAllAnswersToServer() {
    return this.http.post<Answer[]>(`${this.BASE_URL}/cards`, this.answers);
  }
}
