

export function WorldScene(engine){
  // Now create a basic Babylon Scene object
  var worldScene = new BABYLON.Scene(engine);
  // Change the scene background color to green.
  worldScene.clearColor = new BABYLON.Color3(1, 1, 1);
  return worldScene;
}
