/**
 * Created by B16552 on 7/24/2016.
 */


function PlayerActor(sceneTarget){

  this.playerActor = BABYLON.Mesh.CreateSphere("basePlayerEntity", 8, 1, sceneTarget);
  this.playerActor.position = new BABYLON.Vector3(0, 0, 0);

  this.strength = 10;
  this.dexterity = 10;
  this.intelligence = 0;
  this.charisma = 10;
  this.aptitude = 10;
  this.constitution = 10;

  this.age = 0;
  this.race = 'blah';
  this.class = 'new class';


  this.inventory = [];
  this.skills = [];
  this.animations = [];

  return this;
}

PlayerActor.prototype.getStat = function(statKey) {
  var stats = {
    str:  this.strength,
    dex:  this.dexterity,
    int:  this.intelligence,
    char: this.charisma,
    apt:  this.aptitude,
    con:  this.constitution
  };

  return stats[statKey];

};

PlayerActor.prototype.player = function() {
  return this.playerActor;
};


PlayerActor.prototype.setClass = function(className) {
  var class2;
  var self = this;
  class2 = PlayerClass(className);
  class2.then(function(result) { self.resolveClassPromise(result) } );

  self.resolveClassPromise = function(promiseResult){
    self.class =  new promiseResult();
    console.log("is there anything in this class ",self.class);
    console.log("why isn't this working anymore ", this.class.getClassStats())
  };

    /*.then(    console.log("why isn't this working anymore ", this.class.getClassStats())  );*/


};
