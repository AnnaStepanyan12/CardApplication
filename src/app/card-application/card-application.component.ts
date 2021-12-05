import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-application',
  templateUrl: './card-application.component.html',
  styleUrls: ['./card-application.component.css']
})
export class CardApplicationComponent implements OnInit {
  cards: {number: number} [] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addCard(){
    const card = {
      number:  Math.floor(Math.random() * 100) + 1,
    };
   if (this.cards.some(element => element.number === card.number)){
     this.addCard();
   } else {
     this.cards.push(card);
     console.log(this.cards);
   }
  }
  sortCard(){
    this.cards =  this.cards.sort((card1, card2) =>
      (card1.number > card2.number) ? 1 : -1)
  }
  delete(card: { number: number; }){
    this.cards = this.cards.filter(t => t.number !== card.number);
  }
}
