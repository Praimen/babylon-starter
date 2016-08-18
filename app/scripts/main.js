
var gameInstance,playerAccount = {character:{ ID:"mage",age: 25,location:{x:0,y:0,z:1}},characterList:{}};
/*the player account should have objects ready to finish fleshing out the playerActor
* it should also send an ID to the DB and return a character object
* */
var gameUtil = new GameUtils();

var scriptArr = ['GameInstance.js','PlayerActor.js','ArcCamera.js','WorldScene.js','PlayerClass.js'];
var scriptPath = '/Package/scripts';

gameUtil.setBaseScriptPath(scriptPath);
gameUtil.setScriptArr(scriptArr);

gameUtil.scriptLoader(null,null).then(function(pmsg){

  console.log('finished loading the script1s: ',pmsg);

}).done(function(pmsg){

  createScene();

});


// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene( ) {
  gameInstance = new GameInstance();

  var scene = gameInstance.scene;



  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = .5;

  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);

  playerAccount.currentChar = gameInstance.makePlayer(playerAccount);

  gameInstance.setPlayerToInstance(playerAccount.currentChar);

  startEngine(gameInstance);
}


function startEngine(gameInstance){
  windowCanvasResizeEvent(gameInstance)
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

