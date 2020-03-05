import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from '../interfaces/answer';

@Component({
  selector: 'app-flashcard-details',
  templateUrl: './flashcard-details.component.html',
  styleUrls: ['./flashcard-details.component.css']
})
export class FlashcardDetailsComponent implements OnInit {
  @Input() card;
  @Output() answer = new EventEmitter<Answer>();

  showAnswer = false;

  constructor() { }

  ngOnInit(): void {
  }

  flip() {
    this.showAnswer = !this.showAnswer;
  }

  setAnswer(isRight) {
    this.answer.emit({ card: this.card, isRight });
  }

}
