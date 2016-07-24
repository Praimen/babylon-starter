// Get the canvas element from our HTML below
var canvas = document.querySelector("#renderCanvas");
// Load the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
var createScene = function () {
  // Now create a basic Babylon Scene object
  var scene = new BABYLON.Scene(engine);
  // Change the scene background color to green.
  scene.clearColor = new BABYLON.Color3(1, 1, 1);

  var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, false);

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

  light.intensity = .5;

  this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 1, scene);
  sphere.position = new BABYLON.Vector3(0, 0, 0);


  this.ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);

  return scene;
};


var scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  sphere.position.x +=.005;
  scene.activeCamera.alpha += .01;
  scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});
