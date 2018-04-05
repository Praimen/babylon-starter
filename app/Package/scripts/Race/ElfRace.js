import PlayerRace from "../PlayerRace"

export default class ElfRace extends PlayerRace{

  constructor(){
    super();
    this._name = "Elf";
    this._stats = {
      str:  -2,
      dex:  2,
      int:  2,
      char: 1,
      apt:  -1,
      con:  -2
    };
  }

}

