import { Card } from "./Card.js";

class Deck {
  constructor() {
    this.cards = [];
  }

  createDeck() {
    const colors = ["red", "green", "blue", "white", "yellow"];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wagerCards = 3;

    for (const c of colors) {
      for (const v of values) {
        this.cards.push(new Card(c, v));
      }
      for (let i = 0; i < wagerCards; i++) {
        this.cards.push(new Card(c, 0));
      }
    }
  }

  shuffle() {
    // Fisher-Yates shuffle algorithm
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  draw(noOfCards) {
    let cardsReturn = [];
    for (let i = 0; i < noOfCards; i++) {
      cardsReturn.push(this.cards.pop());
    }
    return cardsReturn;
  }

  getSize() {
    return this.cards.length;
  }
}

module.exports = Deck;
