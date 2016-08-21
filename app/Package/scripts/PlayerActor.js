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
  var archeTypeStatMod = this.class.stats;
  var racialStatMod = this.race.stats;
  /*TODO: set up a loop for this*/
  this.stats = {
    str:  0,
    dex:  0,
    int:  0,
    char: 0,
    apt: 0,
    con: 0
  };

  for(var key  in  this.stats  )  {

    var randomStat = Math.random() *  baseStatNum + 5;
    var modifiedStat = Math.ceil(randomStat)  + (archeTypeStatMod[key] * 1) + (racialStatMod[key] * 1);
    if(modifiedStat < 5){
      modifiedStat = 5;
    }
    this.stats[key] = modifiedStat ;


  }



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

  console.log("is there anything in this class ",this.class);


};


PlayerActor.prototype.setRace = function(playerAccount) {
  var racePromise;
  var race = playerAccount.character.race;

  var self = this;
  racePromise = new PlayerRace(race);
  racePromise.then(function(result) { self.resolveRacePromise(result) } );

};

PlayerActor.prototype.resolveRacePromise = function(promiseResult){
  /*the archetype */
  this.race =  new promiseResult();
  this.race.getRaceStats();
  this.setStats();
  console.log("this is the race  ",this.race);


};
