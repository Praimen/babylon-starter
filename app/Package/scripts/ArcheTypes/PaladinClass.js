import PlayerClass from "../PlayerClass"

export default class PaladinClass extends PlayerClass{
  /*skills 400-499*/
  constructor(){
    super();
    this._name = "Paladin";
    this._stats = {
      str:  1,
      dex:  -3,
      int:  -1,
      char: 2,
      apt:  2,
      con:  -1
    };
  }


}


