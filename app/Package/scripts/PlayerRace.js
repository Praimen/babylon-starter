/**
 * Created by B16552 on 8/10/2016.
 */
import HumanRace from "../../Package/scripts/Race/HumanRace.js";
import VampireRace from "../../Package/scripts/Race/VampireRace.js";
import ElfRace from "../../Package/scripts/Race/ElfRace.js";
import SpiderRace from "../../Package/scripts/Race/SpiderRace.js";
import DragonRace from "../../Package/scripts/Race/DragonRace.js";

function PlayerRace(raceName){

  var raceObj = {

    human:    HumanRace,
    vampire:  VampireRace,
    elf:      ElfRace,
    spider:   SpiderRace,
    dragon:   DragonRace

  };

  var getRaceType = function(raceTypeName){

    return raceObj[raceTypeName];

  };


  return getRaceType(raceName);

}

PlayerRace.prototype.getRaceStats = function(){

  return this.raceStats;

};
