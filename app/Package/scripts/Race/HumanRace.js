import PlayerRace from "../PlayerRace"


export default class HumanRace extends PlayerRace {
  constructor(){
    super();
    this._name = "Human";
    this._stats = {
      str:  0,
      dex:  0,
      int:  0,
      char: 0,
      apt:  0,
      con:  0
    };

  }



}




