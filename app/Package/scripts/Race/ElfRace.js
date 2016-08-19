/**
 * Created by b16552 on 8/18/2016.
 */


function ElfRace(){

  this.raceStats = "I am elven i get no bonuses";
  this.stats = {
    str:  -1,
    dex:  -1,
    int:  5,
    char: 0,
    apt:  3,
    con:  -2
  };


}

ElfRace.prototype = Race.prototype;
