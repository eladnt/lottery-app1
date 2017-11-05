import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: any = [];
    constructor(private cardsService: CardsService) { }
      ngOnInit() {
      // Retrieve posts from the API
      this.cardsService.getAllCards().subscribe(cards => {
        this.cards = cards;
      });
    }
  }
