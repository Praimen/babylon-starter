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
    /*attackDist should be dependant on weapon used */
    let speed = 0.02,
        accuracy = 2.0,
        rotSpeed = 0.005,
        attackDist = 3;


    var tempQuat = BABYLON.Quaternion.Identity();
    this.model.rotationQuaternion = BABYLON.Quaternion.Identity();



    this.scene.registerAfterRender(()=>{
      if(this.target != null){
        let goal = new BABYLON.Vector3(this.target.position.x,this.target.position.y,this.target.position.z);
        //TODO: figureout Slerping and Quaternion rotations


        let thisPosition = new BABYLON.Vector3(this.model.position.x,this.model.position.y,this.model.position.z);
        let deltaTime = this.scene.getAnimationRatio();//to normalize the animation independent of FPS
        let direction = goal.subtract(thisPosition) ;
        let magnitude = direction.length();

        let resultVector = new BABYLON.Vector3((direction.x * deltaTime),(direction.y * deltaTime),(direction.z * deltaTime)).normalize();//results in muiltiple mag 1 vectors
        let lookAtGoal = new BABYLON.Vector3(goal.x,this.model.position.y,goal.z);//keep lookat from moving off plane

        tempQuat.copyFrom(this.model.rotationQuaternion);
        this.model.lookAt(lookAtGoal,BABYLON.Space.LOCAL);
        BABYLON.Quaternion.SlerpToRef(tempQuat, this.model.rotationQuaternion, (deltaTime*rotSpeed), this.model.rotationQuaternion);


        if( magnitude > accuracy){
          this.model.translate(resultVector, speed, BABYLON.Space.WORLD);
        }

      }


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
