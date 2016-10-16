module.exports = Game;
class Game {
  constructor(_idRoom, Deck, Player) {
    this.idRoom = _idRoom;
    this.deck = Deck;
    this.player = Player;
  }

  addPlayer(Player) {
  }

  removePlayer(Player) {
    return boolean;
  }

  addCard(Card) {
  }

  countPlayers() {
    return int;
  }

  nextTurn() {
    return Player;
  }
}