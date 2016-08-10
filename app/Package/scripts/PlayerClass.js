/**
 * Created by B16552 on 8/10/2016.
 */




function PlayerClass(className){



  var getPlayerClassType = function(classTypeName){

    var classObj = {

      mage: new MageClass,
      warrior: new WarriorClass,
      paladin: new PaladinClass,
      rogue: new RogueClass

    };

    return classObj[classTypeName];

  };


  var playerClassType = getPlayerClassType(className);



  return playerClassType;

}

PlayerClass.prototype.getClassStats = function(){

    return this.classStats;

};
