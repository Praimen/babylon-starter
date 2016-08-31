/**
 * Created by B16552 on 8/10/2016.
 */
import PlayerClass from "../../../Package/scripts/PlayerClass.js";
export class WarriorClass extends PlayerClass{
  /*skills 200-299*/
  constructor() {
    super();
    this._name = "Warrior class";
    this._stats = {
      str:  4,
      dex:  1,
      int:  -1,
      char: -1,
      apt:  -1,
      con:  3
    };
  }

  get name(){
    return this._name;
  }

}

