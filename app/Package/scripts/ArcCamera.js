/**
 * Created by B16552 on 7/24/2016.
 */

export function ArcCamera(canvas,scene){
  //should the cameras be attached to the scene or the player
  var arcCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
  arcCamera.attachControl(canvas, false);
  return arcCamera;
}
