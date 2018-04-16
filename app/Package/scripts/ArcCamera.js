

export function ArcCamera(canvas,scene){
  //should the cameras be attached to the scene or the player
  /*var arcCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
  arcCamera.attachControl(canvas, false);
*/
  var arcCamera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);

  //The goal distance of camera from target
  arcCamera.radius = 20;

  // The goal height of camera above local origin (centre) of target
  arcCamera.heightOffset = 15;

  // The goal rotation of camera around local origin (centre) of target in x y plane
  arcCamera.rotationOffset = 90;

  //Acceleration of camera in moving from current to goal position
  arcCamera.cameraAcceleration = .05;

  //The speed at which acceleration is halted
  arcCamera.maxCameraSpeed = 50;

  //camera.target is set after the target's creation

  // This attaches the camera to the canvas
  arcCamera.attachControl(canvas, true);


  return arcCamera;
}
