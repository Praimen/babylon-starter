import PlayerClass from "../PlayerClass.js"

export default class WarriorClass extends PlayerClass{
  /*skills 200-299*/
  constructor() {
    super();
    this._name = "Warrior";
    this._stats = {
      str:  2,
      dex:  1,
      int:  -2,
      char: -2,
      apt:  -1,
      con:  2
    };
  }


}

