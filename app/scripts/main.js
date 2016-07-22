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
  /*
  // This creates and positions a free camera
  var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());
   */
  var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
  // This attaches the camera to the canvas

  camera.attachControl(canvas, false);
  // This creates a light, aiming 0,1,0 - to the sky.
  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  // Dim the light a small amount
  light.intensity = .5;
  // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
  this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 1, scene);
  // Move the sphere upward 1/2 its height
  sphere.position = new BABYLON.Vector3(0, 0, 0);

  // Let's try our built-in 'ground' shape. Params: name, width, depth, subdivisions, scene
  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);
  // Leave this function
  return scene;
}; // End of createScene function
// -------------------------------------------------------------
// Now, call the createScene function that you just finished creating
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
