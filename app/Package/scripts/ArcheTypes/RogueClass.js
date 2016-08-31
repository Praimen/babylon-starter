/**
 * Created by B16552 on 8/10/2016.
 */
import PlayerClass from "../../../Package/scripts/PlayerClass.js";
export default class RogueClass extends PlayerClass{

  constructor() {
    super();
    this._name = "Rogue class";
    /*skills 300-399*/
    this.classStats = "i am a Rogue with these stats";
    this._stats = {
      str: 0,
      dex: 5,
      int: -2,
      char: 3,
      apt: 0,
      con: -1
    };

  }

  get name(){
    return this._name;
  }

}


