/**
 * Created by B16552 on 8/10/2016.
 */

 function MageClass(){

  this.classStats = "i am a Mage with these stats";
  console.log('hey mage');
  this.stats = {
    str:  -1,
    dex:  -1,
    int:  5,
    char: 0,
    apt:  3,
    con:  -2
  };


}

MageClass.prototype = PlayerClass.prototype;



