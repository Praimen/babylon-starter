/**
 * Created by B16552 on 7/24/2016.
 */

function PlayerActor(scene){
  var playerActor = BABYLON.Mesh.CreateSphere("sphere1", 8, 1, scene);
  playerActor.position = new BABYLON.Vector3(0, 0, 0);
  return playerActor;
}
