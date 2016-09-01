
import MageClass from "./ArcheTypes/MageClass.js";
import WarriorClass from "./ArcheTypes/WarriorClass.js";
import PaladinClass from "./ArcheTypes/PaladinClass.js";
import RogueClass from "./ArcheTypes/RogueClass.js";

export default class PlayerClass{

  constructor(className){
    this._archetypeListObj =  {
      mage:     new MageClass(),
      warrior:  new WarriorClass(),
      paladin:  new PaladinClass(),
      rogue:    new RogueClass()
    };

    this._archetype =  this._archetypeListObj[className];

  }

  get name(){
    return this._archetype._name;
  }

  get stats(){
    return this._archetype._stats;
  }

}


