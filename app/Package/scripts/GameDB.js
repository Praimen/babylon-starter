/**
 * Created by Praimen on 8/17/2016.
 */


function GameDB(){



}

GameDB.prototype.connect = function(){

  console.log('connected to DB')
};

GameDB.prototype.fetch = function(queryStatement){
  var foundResult;
  var resultSet = {



  };

  foundResult = resultSet[queryStatement]
  console.log("execute queryStatement on DB" + queryStatement);

  return foundResult;

};

GameDB.prototype.close = function(queryStatement){

  console.log("closing DB");

};


