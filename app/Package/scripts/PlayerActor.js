/**
 * Created by B16552 on 7/24/2016.
 */

function PlayerActor(){
/*The player actor should graft things from the playerAccount and other entities like Items, Skills,Archetypes*/

  this.baseStatNum = 10;
  this.stats ={};

  this.age = 'playerAccount.character.age';
  this.animations = [];
  this.class = '';
  this.character = 'playerAccount.character';

  this.inventory = [];/*this should call the account to see what has been saved to his inventory*/
  this.skills = [];/*this should call the account to see what skill IDs the account has available*/

  this.race = 'playerAccount.character.race';

  this.model = {};

  return this;
}




PlayerActor.prototype.setStats = function() {
  /*if no arg passed then get them all*/
  var baseStatNum = this.baseStatNum;
  var archeTypeStat = this.class.stats;
  this.stats = {
    str:  baseStatNum  + (archeTypeStat.str * 1),
    dex:  baseStatNum  + (archeTypeStat.dex * 1),
    int:  baseStatNum  + (archeTypeStat.int * 1),
    char: baseStatNum  + (archeTypeStat.char * 1),
    apt:  baseStatNum  + (archeTypeStat.apt * 1),
    con:  baseStatNum  + (archeTypeStat.con * 1)
  };

};

PlayerActor.prototype.getStat = function(statNameAbbr) {
  /*var stats = this.getStat();
  console.log(stats);*/
  return this.stats[statNameAbbr];

  /*for(var key in  stats  ) {
    console.log(this.class.classStats+" "+key+": "+stats[key]);
  }*/

};

PlayerActor.prototype.playerModel = function(meshObj) {
  if(meshObj){
    this.model = meshObj;
  }else{
    return this.model;
  }
};


PlayerActor.prototype.setClass = function(playerAccount) {
  var classPromise;
  var archetype = playerAccount.character.archetype;
  var self = this;
  classPromise = new PlayerClass(archetype);
  classPromise.then(function(result) { self.resolveClassPromise(result) } );

};

PlayerActor.prototype.resolveClassPromise = function(promiseResult){
  /*the archetype */
  this.class =  new promiseResult();
  this.class.getClassStats();
  this.setStats();
  console.log("is there anything in this class ",this.class);


};
