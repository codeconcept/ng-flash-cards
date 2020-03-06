import { Component } from '@angular/core';
import { WebService } from './../services/web.service';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent {
  cards = [];
  error = null;

  constructor(public web: WebService) { }

  saveAnswer(answer) {
    this.web.saveAnswer(answer);
  }

  saveAll() {
    this.web.saveAllAnswersToServer().subscribe(data => {
      console.log('saveAllAnswersToServer SUCCESS', data);
      this.web.getCards();
    }, err => {
      console.error('saveAllAnswersToServer FAILURE', err);
    });
  }

}
