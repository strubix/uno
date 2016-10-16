module.exports = Game;
class Game {
  constructor(_idRoom, Deck, players) {
    this.idRoom = _idRoom;
    this.deck = Deck;
    this.players = players;
    this.turn = 0;
  }

  addPlayer(Player) {
    this.players.push(Player);
  }

  removePlayer(Player) {
    const index = this.players.indexOf(Player);
    if (!index) {
      return false;
    }
    this.players.splice(index, 1);
    return true;
  }

  addCard(Card) {
  }

  countPlayers() {
    return this.players.length;
  }

  nextTurn() {
    if (this.turn > this.countPlayers()) {
      this.turn = 0;
    }
    return this.players[this.turn++];
  }
}