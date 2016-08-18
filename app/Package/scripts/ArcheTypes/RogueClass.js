/**
 * Created by B16552 on 8/10/2016.
 */
function RogueClass(){
  /*skills 300-399*/
  this.classStats = "i am a Rogue with these stats";
  this.stats = {
    str:  0,
    dex:  5,
    int:  -2,
    char: 3,
    apt:  0,
    con:  -1
  };



}

RogueClass.prototype = PlayerClass.prototype;
