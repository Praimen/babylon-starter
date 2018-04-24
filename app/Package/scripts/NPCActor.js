import NPCStateFactory from "./NPCStateFactory";
import PlayerActor from "./PlayerActor";
export default class NPCActor extends PlayerActor{

  constructor(playerAccount, gameSocket){
    super();    

    this._npcCharacter = super.character; 
    
    this._npcType = new NPCStateFactory()
    this._stateList = [];
    this.type = "npc"
    
    

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


    this._gameSocket.emit('save_NPC_stats', stats)

  }



  set target(){

  }









}