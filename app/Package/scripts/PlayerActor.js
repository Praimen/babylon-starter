/**
 * Created by B16552 on 7/24/2016.
 */

function PlayerActor(playerAccount){
/*The player actor should graft things from the playerAccount and other entities like Items, Skills,Archetypes*/

  this.baseStatNum = 10;
  this.stats = {
    str:  0,
    dex:  0,
    int:  0,
    char: 0,
    apt: 0,
    con: 0
  };



  this.character = playerAccount.character;
  this.animations = [];
  this.class = {};


  this.items = {eq:{},inv:{} };/*this should call the account to see what has been saved to his inventory*/
  this.skills = [];/*this should call the account to see what skill IDs the account has available*/

  this.race = {};
  this.age = {};

  this.model = {};

  return this;
}




PlayerActor.prototype.setStats = function() {
  /*if no arg passed then get them all*/
  var baseStatNum = this.baseStatNum;
  var archeTypeStatMod = this.class.stats;
  var racialStatMod = this.race.stats;

  for(var key  in  this.stats  )  {

    var randomBaseStat = Math.random() *  baseStatNum + 5;
    var modifiedStat = Math.ceil(randomBaseStat)  + (archeTypeStatMod[key] * 1) + (racialStatMod[key] * 1);
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


PlayerActor.prototype.setClass = function() {
  var classPromise;
  var archetype = this.character.archetype;
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


PlayerActor.prototype.setRace = function() {
  var racePromise;
  var race = this.character.race;

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
