/**
 * Created by b16552 on 8/18/2016.
 */


function SpiderRace(){

  this.raceStats = "I am a spiderling i get a huge dexerity bonus";
  this.stats = {
    str:  -1,
    dex:  2,
    int:  -1,
    char: 2,
    apt:  -1,
    con:  -1
  };


}

SpiderRace.prototype = PlayerRace.prototype;
