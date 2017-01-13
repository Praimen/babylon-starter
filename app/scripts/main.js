import GameInstance from "../Package/scripts/GameInstance.js";
import PlayerAccount from "../Package/scripts/PlayerAccount.js";

var gameInstance,player;

//var gameUtils = new GameUtils() ;
//console.log(gameUtils);
var playerAccountProm = new PlayerAccount(["Tommie19"]).account.then((acctObj)=>{
  console.log('inside Promise',acctObj);
  createScene(acctObj);

}).catch(function(err){ console.error('hey there was an error getting an account',err)});


// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene( playerAcctObj ) {
  console.log('create scene',playerAcctObj);
  /* TODO: more specific playerAccount info needs to be retrieved from database and passed into the gameInstance*/
  /*the player account should have objects ready to finish fleshing out the playerActor
   * it should also send an ID to the DB and return a character object
   * */
/*********************************************end************************************************************/

  gameInstance = new GameInstance();
  var scene = gameInstance.scene;
  var playerObj = playerAcctObj[0].doc;

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = .5;

  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);

  gameInstance.validatePlayerAccount(playerObj); /*TODO: This maybe could be a boolean return*/

  gameInstance.makeAccountPlayer();
  gameInstance.addPlayerToScene();
  player = gameInstance.player;
  console.log(player);
  //gameInstance.setPlayerToInstance();
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


