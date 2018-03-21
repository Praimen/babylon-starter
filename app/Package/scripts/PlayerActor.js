

import { Items } from "./Items.js";
import PlayerClass from "./PlayerClass.js";
import PlayerRace from "./PlayerRace.js";

export default class PlayerActor{
/*The player actor should graft things from the playerAccount and other entities like Items, Skills,Archetypes*/
  constructor(playerAccount){

    this._stats = {
      str:  0,
      dex:  0,
      int:  0,
      char: 0,
      apt:  0,
      con:  0
    };

    this._character = playerAccount[playerAccount.currSelectedChar];
    this._animations = [];


    this._items = {

    };

    /*this should call the account to see what has been saved to his inventory*/
    this.skills = [];/*this should call the account to see what skill IDs the account has available*/
    this._class = this.playerClass.name;
    this._race = this.playerRace.name;

    this._age = {};

    this._model = {};

    this._accountID = playerAccount.acctID;

  }



  initStats() {
    /*if no arg passed then get them all*/

    var baseStatNum = 10;
    var archeTypeStatMod = this.playerClass.stats;
    var racialStatMod = this.playerRace.stats;

    for(var key in  this._stats )  {

      var randomBaseStat = Math.random() *  baseStatNum + 5;
      var modifiedStat = Math.ceil(randomBaseStat)  + (archeTypeStatMod[key] * 1) + (racialStatMod[key] * 1);
      if(modifiedStat < 5){
        modifiedStat = 5;
      }
      this._stats[key] = modifiedStat ;

    }

  }

  init() {
    this.initStats();
    this.characterItems();
    return this;
  }

  characterItems(){

    var items = new Items();
    items.getCharacterItems(this._character).then((characterItems) => {
      var obj = {};
      for (var i = 0; i < characterItems.length; i++) {
        obj[characterItems[i]._id]= characterItems[i];
      }
      this._items =  obj;

    });


  };


  get stats() {

    console.log("here is the class ", this.playerClass.name);
    console.log("here are the class stats ", this.playerClass.stats);
    console.log("here are the modified stats",this._stats);

  };


  set playerModel(meshObj) {
    this._model = meshObj;
  }

  get playerModel(){
    return this._model;
  }

  get playerID(){
    return this._accountID;
  }

  set playerClass(playerClassName){

  }

  get playerClass(){
    console.log('player class:',this._character.archetype);
    return new PlayerClass(this._character.archetype);
  }

  set playerRace(playerRaceName){

  }

  get playerRace(){
    return new PlayerRace(this._character.race);
  }



}





