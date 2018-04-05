import PlayerRace from "../PlayerRace"


export default class DragonRace extends PlayerRace{

  constructor(){
    super();
    this._name = "Dragon";
    this._stats = {
      str:  1,
      dex:  -2,
      int:  1,
      char: -2,
      apt:  1,
      con:  1

    };
  }



}

