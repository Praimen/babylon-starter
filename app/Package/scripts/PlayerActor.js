/**
 * Created by B16552 on 7/24/2016.
 */

function PlayerActor(sceneTarget){

  this.playerActor = BABYLON.Mesh.CreateSphere("sphere1", 8, 1, sceneTarget);
  this.playerActor.position = new BABYLON.Vector3(0, 0, 0);

  this.strength = 10;
  this.dexterity = 10;
  this.intelligence = 0;
  this.charisma = 10;
  this.aptitude = 10;
  this.constitution = 10;

  return this;
}

PlayerActor.prototype.getStat = function(statKey) {
  var stats = {
    str:  this.strength,
    dex:  this.dexterity,
    int:  this.intelligence,
    char: this.charisma,
    apt:  this.aptitude,
    con:   this.constitution
  };

  return stats[statKey];

};

PlayerActor.prototype.player = function() {
  return this.playerActor;
};
