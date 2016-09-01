


export default class GameUtils{
  constructor(){
    var scriptArr = [];

    this.loadScripts = function (filename){
      return SystemJS.import(filename);
    };

    this.setScriptArr = function (arr){
      //TODO: check to see if it is an array or not
      scriptArr = arr;
    };

    this.getScriptArr = function(){
      return scriptArr;
    };
  }
}







/*****************************************************************
/*function GameUtils(){

 var scriptArr = [];

 this.loadScripts = function (filename){
 return SystemJS.import(filename);
 };

 this.setScriptArr = function (arr){
 //TODO: check to see if it is an array or not
 scriptArr = arr;
 };

 this.getScriptArr = function(){
 return scriptArr;
 };


 }

 module.exports = function(){ return GameUtils };*/
