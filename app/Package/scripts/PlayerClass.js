/**
 * Created by B16552 on 8/10/2016.
 */

function PlayerClass(className){

  var classObj = {

    mage:  System.import('MageClass.js'),
    warrior: SystemJS.import('WarriorClass.js'),
    paladin: SystemJS.import('PaladinClass.js'),
    rogue: SystemJS.import('RogueClass.js')

  };


  var getPlayerClassType = function(classTypeName){

    return classObj[classTypeName];

  };

//var playerClassType = getPlayerClassType(className);

 return getPlayerClassType(className);

}

PlayerClass.prototype.getClassStats = function(){

    return this.classStats;

};
