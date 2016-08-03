/**
 * Created by B16552 on 8/2/2016.
 */

function GameObj(){

  var scene, player,camera,canvas,engine;


  canvas = document.querySelector("#renderCanvas");
  engine = new BABYLON.Engine(canvas, true);
  scene = new WorldScene(engine);
  camera = new ArcCamera(canvas, scene);
  player = new PlayerActor(scene);



  var getPlayer = function(){
    console.log('here is the player' + player);
    return player;
  };

  var getEngine = function(){
    return engine;
  };

  var getScene = function(){
    return scene;
  };

  var getCamera = function(){
    return camera;
  };

  var getCanvas = function(){
    return canvas;
  };



  return {

    player: getPlayer(),
    canvas: getCanvas(),
    engine: getEngine(),
    scene:  getScene(),
    camera: getCamera()
  };



}
