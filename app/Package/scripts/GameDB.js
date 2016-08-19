/**
 * Created by Praimen on 8/17/2016.
 */


function GameDB(){



}

GameDB.prototype.connect = function(){

  console.log('connected to DB')
};

GameDB.prototype.fetch = function(queryStatement){

  console.log("execute queryStatement on DB" + queryStatement);

  return {};

};

GameDB.prototype.close = function(queryStatement){

  console.log("closing DB");

};


