import MageClass from "./ArcheTypes/MageClass";
import WarriorClass from "./ArcheTypes/WarriorClass";
import PaladinClass from "./ArcheTypes/PaladinClass";
import RogueClass from "./ArcheTypes/RogueClass";

export default class PlayerClassFactory{

  constructor(className){
    this._archetypeListObj =  {
      mage:     new MageClass(),
      warrior:  new WarriorClass(),
      paladin:  new PaladinClass(),
      rogue:    new RogueClass()
    };

    return this._archetypeListObj[className];

  }

}
