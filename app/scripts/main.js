import GameInstance from "../Package/scripts/GameInstance.js";
import PlayerAccount from "../Package/scripts/PlayerAccount.js";

var gameInstance,player;
gameInstance = new GameInstance();
//var gameUtils = new GameUtils() ;
//console.log(gameUtils);
var playerAccountProm = new PlayerAccount(["Tommie19","Praimen13"]).account.then((acctObj)=>{
  console.log('inside Promise',acctObj);
    createScene(acctObj).then(()=>{startEngine(gameInstance)});

}).catch(function(err){
    console.error('hey there was an error getting an account',err)
  });


// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene( playerAcctObj ) {
   /* TODO: more specific playerAccount info needs to be retrieved from database and passed into the gameInstance*/
  /*the player account should have objects ready to finish fleshing out the playerActor
   * it should also send an ID to the DB and return a character object
   * */
/*********************************************end************************************************************/


  console.log('create scene',playerAcctObj);

  var scene = gameInstance.scene;

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = .5;
  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);
  var playerObj =[];
  for (var i = 0; i < playerAcctObj.length; i++) {

    playerObj.push(playerAcctObj[i].doc);
    /*TODO: This maybe could be a boolean return*/

  }

 /* gameInstance.validatePlayerAccount(playerObj).then((playerAccount)=>{
    gameInstance.makeAccountPlayer(playerAccount).then((playerActor)=>{
      console.log('here is the player actor: ',playerActor);
      gameInstance.addPlayerToScene(playerActor);
    });
  });*/
  var playerObjMap = playerObj.map(function(playerobj){return gameInstance.validatePlayerAccount(playerobj)});

  /*TODO: can't keep this Promise.all() because all objects would have to be valid in order for instance to start*/
  return Promise.all(playerObjMap)
  .then((playerAccounts)=> {
    playerAccounts.forEach((playerAccount)=> {
      gameInstance.makeAccountPlayer(playerAccount).then((playerActor)=> {
        console.log('here is the player actor: ', playerActor);
        gameInstance.addPlayerToScene(playerActor);
      })
    })
  });

}


function startEngine(gameInstance){
  console.log('engine render underway');
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


