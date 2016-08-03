/**
 * Created by B16552 on 7/24/2016.
 */

function PlayerActor(sceneTarget){

  var playerActor = BABYLON.Mesh.CreateSphere("sphere1", 8, 1, sceneTarget);
  playerActor.position = new BABYLON.Vector3(0, 0, 0);

  this.strength = 10;
  this.dexterity = 10;
  this.intelligence = 0;
  this.charisma = 10;
  this.aptitude = 10;
  this.constitution = 10;

 /* this.getStat = function(statKey) {
   var stats = {
      str:  function(){ return this.strength},
      dex:  function(){ return this.dexterity},
      int:  function(){ return this.intelligence},
      chsm: function(){ return this.charisma},
      apt:  function(){ return this.aptitude},
      con:  function(){ return this.constitution}
   };

   return stats[statKey]();


  };*/

  return playerActor;
}

PlayerActor.prototype.getStat = function() {
  var stats = {
    str:  function(){ return this.strength},
    dex:  function(){ return this.dexterity},
    int:  function(){ return this.intelligence},
    chsm: function(){ return this.charisma},
    apt:  function(){ return this.aptitude},
    con:  function(){ return this.constitution}
  };

  return stats;

};
