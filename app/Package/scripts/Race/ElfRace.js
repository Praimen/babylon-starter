/**
 * Created by b16552 on 8/18/2016.
 */


function ElfRace(){

  this.raceStats = "I am elven i get int dex char bonuses, but str and con minuses";
  this.stats = {
    str:  -2,
    dex:  1,
    int:  1,
    char: 1,
    apt:  1,
    con:  -2
  };


}

ElfRace.prototype = PlayerRace.prototype;
