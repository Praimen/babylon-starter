/**
 * Created by B16552 on 8/10/2016.
 */
import PlayerClass from "../../../Package/scripts/PlayerClass.js";

export class PaladinClass extends PlayerClass{
  /*skills 400-499*/
  constructor(){
    super();
    this._name = "Paladin class";
    this._stats = {
      str:  2,
      dex:  -2,
      int:  -1,
      char: 3,
      apt:  1,
      con:  2
    };
  }

  get name(){
    return this._name;
  }


}


