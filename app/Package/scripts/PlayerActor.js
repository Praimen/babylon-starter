/**
 * Created by B16552 on 7/24/2016.
 */

function PlayerActor(sceneTarget){

  var playerActor = BABYLON.Mesh.CreateSphere("sphere1", 8, 1, sceneTarget);
  playerActor.position = new BABYLON.Vector3(0, 0, 0);
  var stats = {
    str:  getStr(),
    dex:  getDex(),
    int:  getInt(),
    wis:  getWis(),
    apt:  getApt(),
    con:  getCon()
  };



  return playerActor;
}

PlayerActor.prototype.stats = function(){
  


};
