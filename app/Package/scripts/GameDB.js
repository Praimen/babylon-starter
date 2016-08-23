/**
 * Created by Praimen on 8/17/2016.
 */


function GameDB(){

}

GameDB.prototype.connect = function(){

  console.log('connected to DB')
};

GameDB.prototype.fetch = function(queryStatement){
  var resultSet = this.resultSet;

  var matchedResult = resultSet[queryStatement];
  console.log("execute queryStatement on DB ", matchedResult);

  return matchedResult;

};

GameDB.prototype.close = function(msg){

  console.log(msg);

};


