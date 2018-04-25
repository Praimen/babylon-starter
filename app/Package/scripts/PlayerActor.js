

import { Items } from "./Items";
import PlayerClassFactory from "./PlayerClassFactory";
import PlayerRaceFactory from "./PlayerRaceFactory";

export default class PlayerActor{
/*The player actor should graft things from the playerAccount and other entities like Items, Skills,Archetypes*/
  constructor(gameInstance){

    this._gameSocket = gameInstance.socket;
    this._scene = gameInstance.scene;

    this._character = {} ;
    this._animations = [];


    this._items = { };

    /*this should call the account to see what has been saved to his inventory*/
    this.skills = [];/*this should call the account to see what skill IDs the account has available*/
    this._class = {};
    this._race = {};

    this._age = {};

    this._model = {};

    this._accountID = "";


  }

  init(playerAccount) {
    this._character = playerAccount.currSelectedChar;
    this._accountID = playerAccount._id;
    this._type = "player";
    this.playerClass = this._character.archetype;
    this.playerRace = this._character.race;
    return this;
  }


  initStats() {
    /*if no arg passed then get them all*/
    var stats = {
      str:  0,
      dex:  0,
      int:  0,
      char: 0,
      apt:  0,
      con:  0
    };

    var baseStatNum = 10;
    var archeTypeStatMod = this._class.stats;
    var racialStatMod = this._race.stats;

    for(var key in stats )  {

      var randomBaseStat = Math.random() *  baseStatNum + 5;
      var modifiedStat = Math.ceil(randomBaseStat)  + (archeTypeStatMod[key] * 1) + (racialStatMod[key] * 1);
      if(modifiedStat < 5){
        modifiedStat = 5;
      }
      stats[key] = modifiedStat ;

    }


    this._gameSocket.emit('save_player_stats', stats)

  }

  updateOnRender(){

  }



  characterItems(){

    var items = new Items(this._gameSocket);
    items.getCharacterItems(this._character).then((characterItems) => {
      var obj = {};
      for (var i = 0; i < characterItems.length; i++) {
        obj[characterItems[i]._id]= characterItems[i];
      }
      this._items =  obj;

    });


  };


  get stats() {

    console.log("here is the class ", this._class.name);
    console.log("here are the class stats ", this._class.stats);
    console.log("here are the modified stats",this._stats);
    console.log("here are the character modified stats",this._character.stats);
    return this._character.stats

  };




  get playerID(){
    return this._accountID;
  }

  set playerClass(playerClassName){
    this._class = new PlayerClassFactory(playerClassName);


  }

  get playerClass(){
    console.log('player class getter:',this._class);
    return this._class;
  }

  set playerRace(playerRaceName){
    this._race = new PlayerRaceFactory(playerRaceName);
  }

  get playerRace(){
    console.log('player race getter:',this._race);
    return this._race;
  }

  get character(){
    console.log('player race getter:',this._character);
    return this._character;
  }

  set model(babylonModel){
    this._model = babylonModel;
  }

  get model(){
    return this._model;
  }

  get scene(){
    return this._scene
  }



}





