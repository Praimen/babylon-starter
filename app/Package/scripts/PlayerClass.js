/**
 * Created by B16552 on 8/10/2016.
 */




function PlayerClass(className){



  var getPlayerClassType = function(classTypeName){
    console.log('hey you gonna pick a class or what', classTypeName);
    var classObj = {

      mage:  System.import('MageClass.js').then(function(resolve){return resolve;},function(rejected){}),
      warrior: SystemJS.import('WarriorClass.js'),
      paladin: SystemJS.import('PaladinClass.js'),
      rogue: SystemJS.import('RogueClass.js')

    };
    console.log('so are you saying that the class obj is nothing ',classObj[classTypeName]);
    return classObj[classTypeName];

  };

var playerClassType = getPlayerClassType(className);

 return playerClassType;





}

PlayerClass.prototype.getClassStats = function(){

    return this.classStats;

};
