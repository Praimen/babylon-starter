

import HumanRace from "./Race/HumanRace.js";
/*import VampireRace from "./Race/VampireRace.js";*/
import ElfRace from "./Race/ElfRace.js";
import SpiderRace from "./Race/SpiderRace.js";
import DragonRace from "./Race/DragonRace.js";

export default class PlayerRace {

  constructor(raceName) {

    this._raceListObj = {

      human:    new HumanRace(),
    /*  vampire:  new VampireRace(),*/
      elf:      new ElfRace(),
      spider:   new SpiderRace(),
      dragon:   new DragonRace()

    };

    this._race = this._raceListObj[raceName];
  }


  get name() {
    return this._race._name;
  }

  get stats(){
    return this._race._stats;
  }




}


