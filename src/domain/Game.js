import Deck from "./Deck";

class Game {
  constructor() {
    this.players = [];
    this.deck = new Deck();
    this.discardPile = [];
    this.discardPiles = {
      red: [],
      green: [],
      blue: [],
      white: [],
      yellow: [],
    };
    this.cardsPerHand = 5;
    this.playerOnTurn = 0;
  }
  initializeGame(players) {
    this.players = players;
    this.deck.createDeck();
    this.deck.shuffle();
    this.dealHands();
    this.setStartPLayer();
  }

  dealHands() {
    for (const player of this.players) {
      player.hand = this.deck.draw(this.cardsPerHand);
    }
  }
  setStartPLayer() {
    let oldestPlayer = this.players[0];
    for (const player of this.players) {
      if (player.dateOfBirth < oldestPlayer.dateOfBirth) {
        oldestPlayer = player;
      }
    }
    this.splayerOnTurn = this.players.indexOf(oldestPlayer);
  }
  getSizeDeck() {
    return this.deck.getSize();
  }
  playTurn() {
    const player = this.players[this.playerOnTurn];
    // play turn logic
    this.playerOnTurn = (this.playerOnTurn + 1) % this.players.length;
  }
}

module.exports = Game;
