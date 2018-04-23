import NPCStateFactory from "./NPCStateFactory";

export default class NPCActor extends PlayerActor{
/*The player actor should graft things from the playerAccount and other entities like Items, Skills,Archetypes*/
  constructor(playerAccount, gameSocket){
    super();    

    this._npcCharacter = super.character; 
    
    this._npcType = new NPCStateFactory()
    this._stateList = [];
    
    

  }

  set target(){

  }









}