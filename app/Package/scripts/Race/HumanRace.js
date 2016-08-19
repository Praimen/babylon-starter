/**
 * Created by b16552 on 8/18/2016.
 */


function HumanRace(){

  this.raceStats = "I am a human i get no bonuses";
  this.stats = {
    str:  -1,
    dex:  -1,
    int:  5,
    char: 0,
    apt:  3,
    con:  -2
  };


}

HumanRace.prototype = Race.prototype;



