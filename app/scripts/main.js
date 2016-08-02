
var scene, player,camera,canvas,engine;

var gameUtil = new GameUtils();

var scriptArr = ['PlayerActor.js','ArcCamera.js','WorldScene.js'];
var scriptPath = '/Package/scripts';

gameUtil.setBaseScriptPath(scriptPath);
gameUtil.setScriptArr(scriptArr);

gameUtil.scriptLoader(null,null).then(function(pmsg){
  console.log('finished loading the script1s: ',pmsg);

  canvas = document.querySelector("#renderCanvas");
  engine = new BABYLON.Engine(canvas, true);
  scene = new WorldScene(engine);
  camera = new ArcCamera(canvas, scene);
  player = new PlayerActor(scene);

}).done(function(pmsg){
  createScene(scene);
});


// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene(scene) {

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

  light.intensity = .5;

  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);

  startEngine();
}


function startEngine(){
  // Register a render loop to repeatedly render the scene
  engine.runRenderLoop(function () {
    //player.position.x +=.005;
    //scene.activeCamera.alpha += .01;
    scene.render();
  });

}


// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});
