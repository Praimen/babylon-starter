/**
 * Created by B16552 on 8/2/2016.
 */

function GameInstance(){
  var playerAccountPlayer = {};

  var scene,camera,canvas,engine;
  var playerCharactersArr = [];

  canvas = document.querySelector("#renderCanvas");
  engine = new BABYLON.Engine(canvas, true);
  scene = new WorldScene(engine);
  camera = new ArcCamera(canvas, scene);


  var validatePlayerAccount = function(){

  };

  var makeAccountPlayer = function(playerAccount){
    playerAccountPlayer = new PlayerActor();
    /*get player info from DB account and setup player*/
    /*
    * TODO: make a PlayerAccount Object to Query the game object for information
    * the game object will be responsible for facilitation the instantiation of
    * object the Player Account object will house the specific data for the client
    * verified by the database
    *
    * */
    playerAccountPlayer.setClass(playerAccount.character.ID);


    addPlayerToScene(playerAccount.character);

    return playerAccountPlayer;

  };

  function addPlayerToScene(character){

    playerAccountPlayer.addToScene(character.ID,scene,character.location);

  }

  var setPlayerToInstance = function(playerCharacterObj ){
    playerCharactersArr.push(playerCharacterObj)
  };

  var getPlayer = function(){
    return playerAccountPlayer;
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

