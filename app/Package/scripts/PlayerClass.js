/**
 * Created by B16552 on 8/10/2016.
 */
import MageClass from "../../Package/scripts/ArcheTypes/MageClass.js";
import WarriorClass from "../../Package/scripts/ArcheTypes/WarriorClass.js";
import PaladinClass from "../../Package/scripts/ArcheTypes/PaladinClass.js";
import RogueClass from "../../Package/scripts/ArcheTypes/RogueClass.js";

export default class PlayerClass{

  constructor(){

  }

  set archetype(className){

    this._classObj = {
      mage:  MageClass,
      warrior: WarriorClass,
      paladin: PaladinClass,
      rogue: RogueClass
    };

    this._classType = this._classObj[className];
  }

  get archetype(){
    return this._classType;
  }

  get stats(){
    return this._stats;
  }

}


