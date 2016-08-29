(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.GameUtils = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var GameUtils = function GameUtils() {
    _classCallCheck(this, GameUtils);

    var scriptArr = [];

    this.loadScripts = function (filename) {
      return SystemJS.import(filename);
    };

    this.setScriptArr = function (arr) {
      //TODO: check to see if it is an array or not
      scriptArr = arr;
    };

    this.getScriptArr = function () {
      return scriptArr;
    };
  };

  exports.default = GameUtils;
});

},{}],2:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../Package/scripts/GameUtils.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("../Package/scripts/GameUtils.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.GameUtils);
    global.main = mod.exports;
  }
})(this, function (_GameUtils) {
  "use strict";

  var _GameUtils2 = _interopRequireDefault(_GameUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var gameInstance, player;
  /*the player account should have objects ready to finish fleshing out the playerActor
  * it should also send an ID to the DB and return a character object
  * */

  /*var GameUtils = require('../Package/scripts/GameUtils.js');*/

  var gameUtils = new _GameUtils2.default();
  console.log(gameUtils);

  /*
  
  var scriptArr = ['PlayerAccount.js','ArcCamera.js','WorldScene.js','GameInstance.js','PlayerActor.js','PlayerRace.js','PlayerClass.js','GameDB.js','Items.js','Items/ItemDB.js'];
  /!*var scriptPath = '/Package/scripts';*!/
  
  /!*gameUtil.setBaseScriptPath(scriptPath);*!/
  gameUtil.setScriptArr(scriptArr);
  
  gameUtil.scriptLoader(null,null).then(function(pmsg){
  
    console.log('finished loading the script1s: ',pmsg);
  
  }).done(function(pmsg){
  
    createScene();
  
  });
  
  
  // -------------------------------------------------------------
  // Here begins a function that we will 'call' just after it's built
  function createScene( ) {
    var playerAccount = new PlayerAccount();
  
    /!* TODO: more specific playerAccount info needs to be retrieved from database and passed into the gameInstance*!/
  
    gameInstance = new GameInstance();
  
    var scene = gameInstance.scene;
  
  
  
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = .5;
  
    var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);
  
    player = gameInstance.makePlayer(playerAccount);
  
  
    gameInstance.setPlayerToInstance(playerAccount);
  
    startEngine(gameInstance);
  }
  
  
  function startEngine(gameInstance){
    windowCanvasResizeEvent(gameInstance);
    // Register a render loop to repeatedly render the scene
    gameInstance.engine.runRenderLoop(function () {
      //player.position.x +=.005;
      //scene.activeCamera.alpha += .01;
      gameInstance.scene.render();
    });
  
  }
  
  function windowCanvasResizeEvent(gameInstance){
    window.addEventListener("resize", function () {
      gameInstance.engine.resize();
    });
  }
  // Watch for browser/canvas resize events
  
  */
});

},{"../Package/scripts/GameUtils.js":1}]},{},[2]);
