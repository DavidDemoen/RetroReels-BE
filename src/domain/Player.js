class Player {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.hand = [];
    this.isStartPLayer = false;
    this.expeditions = { red: [], green: [], blue: [], white: [], yellow: [] };
  }

  placeCard(card){
    this.hand = this.hand.filter((c) => c !== card);
    this.expeditions[card.color].push(card);
  }
  discardCard(card){
    this.hand = this.hand.filter((c) => c !== card);
  }
}

module.exports = Player;
