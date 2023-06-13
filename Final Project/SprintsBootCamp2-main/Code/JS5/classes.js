class Board {
  constructor() {
    this.lenght = 8;
    this.width = 8;
    this.pieces = [];
  }

  startGame() {
    for (let i = 0; i < 8; i++) {
      this.pieces.push(new Piece(this, i + 1, 2, "pawn", "white"));
      this.pieces.push(new Piece(this, i + 1, 7, "pawn", "black"));
    }
  }
  hasPiece(team, x, y) {
    return this.pieces.some((e) => e.team == team && e.x == x && e.y == y);
  }

  static draw(board) {
    console.log(board.lenght, board.width, board.pieces);
  }

  static saveMove(board, x1, y1, x2, y2) {
    console.log(board, x1, y1, x2, y2);
  }
}

class Piece {
  #_x;
  #_y;
  constructor(board, x, y, type, team) {
    this.board = board;
    this.team = team;
    this.type = type;
    this._x = x;
    this._y = y;
    throw new Error("");
  }

  canMove(x, y) {
    if (x < 1 || y < 1 || x > this.board.lenght || y > this.board.width)
      return false;
    if (this.board.hasPiece(this.team, x, y)) return false;
    return true;
  }

  getCoordinates() {
    return `${this._x} ${this._y}`;
  }

  set x(val) {
    if (val < 1) this._x = 1;
    else if (val > this.board.lenght) this._x = this.board.lenght;
    else this._x = val;
  }
  get x() {
    return this._x;
  }
}

class Pawn extends Piece {
  constructor(board, x, y, team) {
    super(board, x, y, "pawn", team);
  }
  canMove() {
    if (!super.canMove()) return false;
    //Pawn logic
    return true;
  }
}

let board = new Board();
let pawn1 = new Pawn(board, 1, 2, "white");

class Board {
  width;
  height;
  pieces;
}

class Team {
  color;
}

class Piece {
  team;
  type;
  x;
  y;

  canMove(x, y) {
    //logic for all peices
  }
}

class Pawn extends Piece {
  canMove() {
    return super.canMove() && true;
  }
}
