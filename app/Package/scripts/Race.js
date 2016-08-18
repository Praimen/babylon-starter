/**
 * Created by B16552 on 8/10/2016.
 */

function Race(className){

  var raceObj = {

    human:    SystemJS.import('Race/HumanRace.js'),
    vampire:  SystemJS.import('Race/VampireRace.js'),
    elf:      SystemJS.import('Race/ElfRace.js'),
    spider:   SystemJS.import('Race/SpiderRace.js'),
    dragon:   SystemJS.import('Race/DragonRace.js')

  };

  var getRaceType = function(classTypeName){

    return raceObj[classTypeName];

  };


  return getRaceType(className);

}

Race.prototype.getRaceStats = function(){

  return this.raceStats;

};
