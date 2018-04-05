import PlayerClass from "../PlayerClass.js"

export default class RogueClass extends PlayerClass{

  constructor() {
    super();
    this._name = "Rogue";
    /*skills 300-399*/
    this.classStats = "i am a Rogue with these stats";
    this._stats = {
      str: -2,
      dex: 3,
      int: -1,
      char: 1,
      apt: 1,
      con: -2
    };

  }



}


