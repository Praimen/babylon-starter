/**
 * Created by B16552 on 8/2/2016.
 */

function GameUtils(){

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

GameUtils.prototype.scriptLoader = function(arr, funcName){
  var promise = Q;
  var scriptArray = arr || this.getScriptArr();
  var mapFunctionName = funcName || this.loadScripts;
  var scriptsLoaded = scriptArray.map(mapFunctionName);

  return promise.all(scriptsLoaded);

};

GameUtils.prototype.setBaseScriptPath = function (path) {
  SystemJS.config({
    baseURL: path
  });
};



