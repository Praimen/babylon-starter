/**
 * Created by b16552 on 8/18/2016.
 */


function DragonRace(){

  this.raceStats = "I am a dragon i get no bonuses";
  this.stats = {
    str:  -1,
    dex:  -1,
    int:  5,
    char: 0,
    apt:  3,
    con:  -2
  };


}

DragonRace.prototype = Race.prototype;
