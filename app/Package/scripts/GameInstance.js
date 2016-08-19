/**
 * Created by B16552 on 8/2/2016.
 */

function GameInstance(){
  /*TODO: at some point the GameInstance should stop asking the Player Account for information
  * It should already have the object that it needs to build the player actor
  *
  * */

  var playerActorPlayer = new PlayerActor();

  var scene,camera,canvas,engine;
  var playerCharactersArr = [];

  canvas = document.querySelector("#renderCanvas");
  engine = new BABYLON.Engine(canvas, true);
  scene = new WorldScene(engine);
  camera = new ArcCamera(canvas, scene);


  var validatePlayerAccount = function(){

  };

  var makeAccountPlayer = function(playerAccount){

    /*get player info from DB account and setup player*/
    /*
    * TODO: make a PlayerAccount Object to Query the game object for information
    * the game object will be responsible for facilitating the instantiation of
    * object the Player Account object will house the specific data for the client
    * verified by the database
    *
    * */
    playerActorPlayer.setClass(playerAccount);
    playerActorPlayer.setRace(playerAccount);




    addPlayerToScene(playerAccount);

    return playerActorPlayer;

  };

  function addPlayerToScene(playerAccount){

    var pos = playerAccount.character.location;
    var playerModel = BABYLON.Mesh.CreateSphere(playerAccount.character.archetype, 8, 1, scene);
    playerActorPlayer.playerModel(playerModel);
    playerActorPlayer.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);

  }

  var setPlayerToInstance = function(playerAccount){
    playerCharactersArr.push(playerAccount.character)
  };

  var getPlayer = function(){
    return playerActorPlayer;
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
    makePlayer: makeAccountPlayer,
    setPlayerToInstance: setPlayerToInstance,
    player: getPlayer(),
    canvas: getCanvas(),
    engine: getEngine(),
    scene:  getScene(),
    camera: getCamera()
  };



}

