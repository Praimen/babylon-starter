/**
 * Created by B16552 on 8/10/2016.
 */
import MageClass from "../Package/scripts/MageClass.js";
import WarriorClass from "../Package/scripts/WarriorClass.js";
import PaladinClass from "../Package/scripts/PaladinClass.js";
import RogueClass from "../Package/scripts/RogueClass.js";

function PlayerClass(className){

  var classObj = {

    mage:  MageClass,
    warrior: WarriorClass,
    paladin: PaladinClass,
    rogue: RogueClass

  };


  var getPlayerClassType = function(classTypeName){

    return classObj[classTypeName];

  };


 return getPlayerClassType(className);

}

PlayerClass.prototype.getClassStats = function(){

    return this.stats;

};
