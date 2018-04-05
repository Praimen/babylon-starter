import PlayerRace from "../PlayerRace"


export default class SpiderRace extends PlayerRace{
  constructor(){
    super();
    this._name = "Spider";
    this._stats = {
      str:  -1,
      dex:  3,
      int:  -1,
      char: -2,
      apt:  2,
      con:  -1
    };

  }



}

