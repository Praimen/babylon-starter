/**
 * Created by B16552 on 8/10/2016.
 */
function PaladinClass(){
  /*skills 400-499*/
  this.classStats = "i am a Paladin with these stats";
  this.stats = {
    str:  2,
    dex:  -2,
    int:  -1,
    char: 3,
    apt:  1,
    con:  2
  };


}

PaladinClass.prototype = PlayerClass.prototype;
