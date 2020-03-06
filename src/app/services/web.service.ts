import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../interfaces/card';
import { Answer } from '../interfaces/answer.ts';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  private BASE_URL = 'http://localhost:3000';
  cards = [];
  error = null;
  answers = [];

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

  saveAnswer(answer) {
    this.answers = [...this.answers, answer];
    console.log('all answers', this.answers);
  }

  get allCardsAnswered() {
    return this.answers.length === this.cards.length;
  }

  saveAllAnswersToServer() {
    return this.http.post<Answer[]>(`${this.BASE_URL}/cards`, this.answers);
  }
}
