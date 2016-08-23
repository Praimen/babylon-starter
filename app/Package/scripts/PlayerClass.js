/**
 * Created by B16552 on 8/10/2016.
 */

function PlayerClass(className){

  var classObj = {

    mage:  SystemJS.import('ArcheTypes/MageClass.js'),
    warrior: SystemJS.import('ArcheTypes/WarriorClass.js'),
    paladin: SystemJS.import('ArcheTypes/PaladinClass.js'),
    rogue: SystemJS.import('ArcheTypes/RogueClass.js')

  };


  var getPlayerClassType = function(classTypeName){

    return classObj[classTypeName];

  };


 return getPlayerClassType(className);

}

PlayerClass.prototype.getClassStats = function(){

    return this.stats;

};
