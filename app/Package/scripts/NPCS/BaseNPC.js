

export default class BaseNPC{
  constructor(target,state){
    this._target = {};
    this._state = {};

    return this
  }







  get state(){
    return this._state;
  }

  set state(newState){
    this._state = newState;
  }

  get target(){
    return this._target;
  }

  set target(npcTarget){
    this._target = npcTarget;
  }


}
