

import GameUtils from "../Package/scripts/GameUtils.js";
import GameInstance from "../Package/scripts/GameInstance.js";
import PlayerAccount from "../Package/scripts/PlayerAccount.js";


var gameInstance,player;
/*the player account should have objects ready to finish fleshing out the playerActor
* it should also send an ID to the DB and return a character object
* */

var gameUtils = new GameUtils() ;
console.log(gameUtils);



var scriptArr = ['PlayerRace.js','PlayerClass.js','GameDB.js','Items.js','Items/ItemDB.js'];




  createScene();




// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene( ) {
  /* TODO: more specific playerAccount info needs to be retrieved from database and passed into the gameInstance*/
  var playerAccount = new PlayerAccount();
/*********************************************end************************************************************/


  gameInstance = new GameInstance();

  var scene = gameInstance.scene();



  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = .5;

  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);

  gameInstance.validatePlayerAccount(playerAccount);

  //player = gameInstance.makePlayer();
  //gameInstance.setPlayerToInstance();

  //startEngine(gameInstance);
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


