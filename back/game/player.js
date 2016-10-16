module.exports = Player;

class Player {
  constructor(_idSocket) {
    this.idSocket = _idSocket;
    this.hand = [];
  }

  addCards(_cards) {
    this.hand.push(_cards);
  }

  removeCard(_pos) {
    if(this.hand.length < _pos - 1){
      return false;
    }
    this.hand.splice(_pos, 1);
    return true;
  }
}