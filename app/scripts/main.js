
var gameObj;

var gameUtil = new GameUtils();

var scriptArr = ['GameObj.js','PlayerActor.js','ArcCamera.js','WorldScene.js','PlayerClass.js'];
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
  gameObj = new GameObj();

  gameObj.player.setClass("rogue");

  var scene = gameObj.scene;

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = .5;

  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);

  startEngine(gameObj);
}


function startEngine(gameObj){
  // Register a render loop to repeatedly render the scene
  gameObj.engine.runRenderLoop(function () {
    //player.position.x +=.005;
    //scene.activeCamera.alpha += .01;
    gameObj.scene.render();
  });

}

function windowCanvasResizeEvent(gameObj){
  window.addEventListener("resize", function () {
    gameObj.engine.resize();
  });
}
// Watch for browser/canvas resize events

