/**
 * Created by B16552 on 7/24/2016.
 */

import { Items } from "./Items.js";
import PlayerClass from "./PlayerClass.js";
/*import PlayerRace from "./PlayerRace.js";*/

export default class PlayerActor{
/*The player actor should graft things from the playerAccount and other entities like Items, Skills,Archetypes*/
  constructor(playerAccount){
    this._baseStatNum = 10;
    this._stats = {
      str:  0,
      dex:  0,
      int:  0,
      char: 0,
      apt:  0,
      con:  0
    };

    this._character = playerAccount.character;
    this._animations = [];
    this._class = new PlayerClass(this._character.archetype);
    /*this._race = new PlayerRace(this._character.race);*/

    this._items = {
      eq:{},
      inv:{}
    };

    /*this should call the account to see what has been saved to his inventory*/
    this.skills = [];/*this should call the account to see what skill IDs the account has available*/


    this._age = {};

    this._model = {};

  }



  initStats() {
    /*if no arg passed then get them all*/
    var baseStatNum = this._baseStatNum;
    var archeTypeStatMod = this._class.stats;
    /*var racialStatMod = this.race.stats;*/

    for(var key in  this._stats )  {

      var randomBaseStat = Math.random() *  baseStatNum + 5;
      var modifiedStat = Math.ceil(randomBaseStat)  + (archeTypeStatMod[key] * 1) /*+ (racialStatMod[key] * 1)*/;
      if(modifiedStat < 5){
        modifiedStat = 5;
      }
      this._stats[key] = modifiedStat ;

    }

  }

  init() {
    this.initStats();
  }




  get stats() {

    console.log("here is the class ",this._class.name);
    console.log("here are the class stats ",this._class.stats);
    console.log("here are the modified stats",this._stats);

  };


  /*setRace () {
    var racePromise;
    var race = this.character.race;
    var self = this;
    racePromise = new PlayerRace(race);
    racePromise.then(function(result) { self.resolveRacePromise(result) } );

  };

  resolveRacePromise(promiseResult){
    /!*the archetype *!/
    this.race =  new promiseResult();
    this.race.getRaceStats();
    this.setStats();
    console.log("this is the race",this.race);
  };

*/


  getCharacterItems(){
    var self = this;
    var items = new Items();

    this.items.objArr = items.getCharacterItems(self);

    /* if(dbresult.equipped){
     characterInvArr.eq[itemID] = dbresult;
     }else{
     characterInvArr.inv[itemID] = dbresult;
     }*/
    console.log('itams: ',this.items.objArr);
  };


  set playerModel(meshObj) {
    this._model = meshObj;
  }

  get playerModel(){
    return this._model;
  }



}





