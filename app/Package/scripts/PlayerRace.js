/**
 * Created by B16552 on 8/10/2016.
 */

/*import HumanRace from "../../Package/scripts/Race/HumanRace.js";
import VampireRace from "../../Package/scripts/Race/VampireRace.js";
import ElfRace from "../../Package/scripts/Race/ElfRace.js";
import SpiderRace from "../../Package/scripts/Race/SpiderRace.js";
import DragonRace from "../../Package/scripts/Race/DragonRace.js";*/

export default class PlayerRace {
  constructor(raceName) {

    this._raceListObj = {

      human:    "HumanRace",
      vampire:  "VampireRace",
      elf:      "ElfRace",
      spider:   "SpiderRace",
      dragon:   "DragonRace"

    };

    return this._raceListObj[raceName]();
  }


  get name() {
    return this._name;
  }

  get stats(){
    return this._stats;
  }




}


