/**
 * Created by B16552 on 8/10/2016.
 */
function WarriorClass(){
  /*skills 200-299*/
  this.classStats = "i am a Warrior with these stats";
  this.stats = {
    str:  4,
    dex:  1,
    int:  -1,
    char: -1,
    apt:  -1,
    con:  3
  };



}

WarriorClass.prototype = PlayerClass.prototype;
