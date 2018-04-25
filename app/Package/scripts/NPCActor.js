import NPCStateFactory from "./NPCStateFactory";
import PlayerActor from "./PlayerActor";
import BasicNPC from "./NPCS/BaseNPC";

export default class NPCActor extends PlayerActor{

  constructor(gameInstance){
    super(gameInstance);



    this._npcGoalType = {};
  }

  init(npcObj){
    this._character = npcObj;
    this.playerClass = this._character.archetype;
    this.playerRace = this._character.race;
    this._accountID = npcObj._id;
    this._type = "npc";

    this._npcState = new NPCStateFactory(this._character.state);
    this._npcGoalType = new BasicNPC(this.target,this._npcState);

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


    this._gameSocket.emit('save_NPC_stats', stats)

  }



  updateOnRender(){

    this.target = "Praimen13";
    this.scene.registerBeforeRender(()=>{
      if(this.target != null){
        var goal = new BABYLON.Vector3(this.target.position.x,this.target.position.y,this.target.position.z);
        var thisPosition = new BABYLON.Vector3(this.model.position.x,this.model.position.y,this.model.position.z);
        var deltaTime = this.scene.getAnimationRatio();
        var direction = goal.subtract(thisPosition) ;
        var speed = 0.1;
        var resultVector = new BABYLON.Vector3((direction.x *  deltaTime),(direction.y * deltaTime),(direction.z * deltaTime)).normalize();
        /*var goal = BABYLON.Vector3(this.target.position.x,this.target.position.y,this.target.position.z);

          goal.normalize() * speed * deltaTime ;//makes the magnitude 1*/
       // this.model.position = resultVector;
        this.model.translate(resultVector, speed,BABYLON.Space.WORLD );

      }
      //

    })
  }


  set npcGoalType(npcType){
   this._npcGoalType = npcType;
  }

  get npcGoalType(){
    return this._npcGoalType;
  }


  set target(goalTarget){
    this._target = this.scene.getMeshByName(goalTarget)
  }

  get target(){
    return this._target;
  }










}
