SystemJS.config({
  baseURL: '/Package/scripts'
});
var scene, player,camera,worldScene,promise;


// Get the canvas element from our HTML below
var canvas = document.querySelector("#renderCanvas");
// Load the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);

promise = Q;

var scriptsLoaded = ['PlayerActor.js','ArcCamera.js','WorldScene.js'].map(loadScripts);

promise.all(scriptsLoaded).then(function(pmsg){
  console.log('finished loadig the scripts: ',pmsg);
  scene = new WorldScene(engine);

}).done(function(pmsg){
  createScene(scene);
});

function loadScripts (filename){
  return System.import(filename);
}



// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene(scene) {

  camera = new ArcCamera(canvas, scene);
  player = new PlayerActor(scene);

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

  light.intensity = .5;

  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);

  startEngine();
}





function startEngine(){
  // Register a render loop to repeatedly render the scene
  engine.runRenderLoop(function () {
    player.position.x +=.005;
    scene.activeCamera.alpha += .01;
    scene.render();
  });

}


// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});
