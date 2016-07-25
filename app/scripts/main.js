SystemJS.config({
  baseURL: '/scripts'
});
var scene, player,camera;

// Get the canvas element from our HTML below
var canvas = document.querySelector("#renderCanvas");
// Load the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);

Promise.all([
  SystemJS.import('PlayerActor.js'),
  SystemJS.import('ArcCamera.js'),
  SystemJS.import('WorldScene.js')
]).then(scene = createScene());





// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
var createScene = function () {


  camera = new ArcCamera(canvas, scene);
  player = new PlayerActor(scene);

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

  light.intensity = .5;




  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);


};





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
