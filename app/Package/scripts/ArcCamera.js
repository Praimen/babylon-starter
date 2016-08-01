/**
 * Created by B16552 on 7/24/2016.
 */

function ArcCamera(canvas,scene){
  var arcCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
  arcCamera.attachControl(canvas, false);
  return arcCamera;
}
