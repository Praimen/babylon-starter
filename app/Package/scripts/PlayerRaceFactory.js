

import HumanRace from "./Race/HumanRace.js";
/*import VampireRace from "./Race/VampireRace.js";*/
import ElfRace from "./Race/ElfRace.js";
import SpiderRace from "./Race/SpiderRace.js";
import DragonRace from "./Race/DragonRace.js";

export default class PlayerRaceFactory {

  constructor(raceName) {

    /* TODO: should vampires be appended to other races like undead much like an additional state of a race instead of an actually race itself*/
    /*  vampire:  new VampireRace(),*/

    this._raceListObj = {
      human:    new HumanRace(),
      elf:      new ElfRace(),
      spider:   new SpiderRace(),
      dragon:   new DragonRace()
    };

    return this._raceListObj[raceName];
  }


}


