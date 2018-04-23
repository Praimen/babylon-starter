import NPCStates from "./NPCStates/NPCStates";

export default class BaseNPC{
  constructor(){   
    this._target = {};
    this._state = {};
  }

  get state(newState){
    return this._state;
  }

  set state(newState){
    this._state = new NPCStates(newState,this.target);
  }

  get target(){
    return this._target;
  }

  set target(npcTarget){
    this._target = npcTarget;
  }


}