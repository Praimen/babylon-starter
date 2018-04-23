import Wander from "./NPCS/NPCStates/Wander";
import Chase from "./NPCS/NPCStates/Chase";
import Idle from "./NPCS/NPCStates/Idle";

export default class NPCStateFactory{
  constructor(){
    
    this._state = {
      wander: new Wander(),
      chase:  new Chase(),
      idle:   new Idle( )       
    }
    
  } 

  loadState(newstate){
    return this._state[newstate]
  }

}