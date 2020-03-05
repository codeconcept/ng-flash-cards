import { Component } from '@angular/core';
import { WebService } from './../services/web.service';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent {
  cards = [];

  constructor(public web: WebService) { }

}
