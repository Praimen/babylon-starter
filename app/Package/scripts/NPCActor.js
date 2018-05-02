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
    let speed = 0.05,
        accuracy = 2,
        visDist = 16,
        visAngle = 30.0,
        attackDist = 3;
    let testQuat = new BABYLON.Quaternion(0,1,0,0)




    this.scene.registerAfterRender(()=>{
      if(this.target != null){
        let goal = new BABYLON.Vector3(this.target.position.x,this.target.position.y,this.target.position.z);
        //TODO: figureout Slerping and Quaternion rotations
        let rotSpeed = 0.1;

        let thisPosition = new BABYLON.Vector3(this.model.position.x,this.model.position.y,this.model.position.z);
        let deltaTime = this.scene.getAnimationRatio();//to normalize the animation independent of FPS
        let direction = goal.subtract(thisPosition) ;
        let magnitude = direction.length();

        let resultVector = new BABYLON.Vector3((direction.x * deltaTime),(direction.y * deltaTime),(direction.z * deltaTime)).normalize();//results in muiltiple mag 1 vectors
        let lookAtGoal = new BABYLON.Vector3(goal.x,this.model.position.y,goal.z);//keep lookat from moving off plane

        let turnAngle =  Math.atan2(this.target.position.x - this.model.position.x, this.target.position.z  - this.model.position.z ) * 180 /Math.PI + 180;
        let FOV = Math.ceil(turnAngle/30)%12;






        //console.log('turn: %s and visAngle: %s  distance s%', turnAngle , visAngle, magnitude);

        if(magnitude < visDist && FOV <= 4 || FOV >= 8 ){

          this.model.rotate(BABYLON.Axis.Y, 0.0, BABYLON.Space.LOCAL).lookAt(lookAtGoal,BABYLON.Space.WORLD)

          // this.model.lookAt(lookAtGoal, BABYLON.Space.LOCAL);

          if( magnitude > accuracy){
            this.model.translate(resultVector, speed, BABYLON.Space.WORLD);
          }

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
