/**
 * Created by B16552 on 7/24/2016.
 */

function PlayerActor(){
/*The player actor should graft things from the playerAccount and other entities like Items, Skills,Archetypes*/


  this.strength = 10;
  this.dexterity = 10;
  this.intelligence = 10;
  this.charisma = 10;
  this.aptitude = 10;
  this.constitution = 10;

  this.age = 'playerAccount.character.age';
  this.animations = [];
  this.class = '';
  this.character = 'playerAccount.character';

  this.inventory = [];/*this should call the account to see what has been saved to his inventory*/
  this.skills = [];/*this should call the account to see what skill IDs the account has available*/

  this.race = 'playerAccount.character.race';

  return this;
}


PlayerActor.prototype.addToScene = function(playerName, sceneTarget,posObj) {
  var pos = posObj;
  this.playerActor = BABYLON.Mesh.CreateSphere(playerName, 8, 1, sceneTarget);
  this.playerActor.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);
};

PlayerActor.prototype.getStat = function(statKey) {
  var stats = {
    str:  (this.strength * 1)  + (this.class.stats.str * 1),
    dex:  (this.dexterity  * 1)  + (this.class.stats.dex * 1),
    int:  (this.intelligence * 1)  + (this.class.stats.int * 1),
    char: (this.charisma * 1)  + (this.class.stats.char * 1),
    apt:  (this.aptitude * 1)  + (this.class.stats.apt * 1),
    con:  (this.constitution * 1)  + (this.class.stats.con * 1)
  };

  return stats[statKey] || stats;

};

PlayerActor.prototype.getStats = function() {
  var stats = this.getStat();
  for(var key in  stats  ) {
    console.log(this.class.classStats+" "+key+": "+stats[key]);
  }
};

PlayerActor.prototype.player = function() {
  return this.playerActor;
};


PlayerActor.prototype.setClass = function(className) {
  var classPromise;
  var self = this;
  classPromise = new PlayerClass(className);
  classPromise.then(function(result) { self.resolveClassPromise(result) } );

};

PlayerActor.prototype.resolveClassPromise = function(promiseResult){
  this.class =  new promiseResult();
  console.log("is there anything in this class ",this.class);
  console.log("why isn't this working anymore ", this.class.getClassStats())
};
