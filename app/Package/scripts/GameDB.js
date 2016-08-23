/**
 * Created by Praimen on 8/17/2016.
 */


function GameDB(){



}

GameDB.prototype.connect = function(){

  console.log('connected to DB')
};

GameDB.prototype.fetch = function(queryStatement){
  var foundResult = {};
  var resultSet = {
    itam1:{
      name: "sword of finding",
      type: "weapon",
      bal: 10,
      wgt: 15,
      lor: 13,
      uni: true,
      stack: false,
      desc: "This is a smallish blade that begs you to ask a question",
      skille: ['locate','track']
    },
    itam2:{
      name: "vial of mending",
      type: "potion",
      bal: 10,
      wgt: 15,
      lor: 13,
      uni: false,
      stack: true,
      desc: "This is a smallish blade that begs you to ask a question",
      spelle: ['cure_minor']
    }


  }
  console.log("execute queryStatement on DB" + queryStatement);

  return foundResult;

};

GameDB.prototype.close = function(queryStatement){

  console.log("closing DB");

};


