/**
 * Created by b16552 on 8/18/2016.
 */


function HumanRace(){

  this.raceStats = "I am a human i get no bonuses";
  this.stats = {
    str:  1,
    dex:  1,
    int:  1,
    char: 1,
    apt:  1,
    con:  1
  };


}

HumanRace.prototype = PlayerRace.prototype;



