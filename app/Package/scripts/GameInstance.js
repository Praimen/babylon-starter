/**
 * Created by B16552 on 8/2/2016.
 */


import WorldScene from "../Package/scripts/WorldScene.js";
import PlayerActor from "../Package/scripts/PlayerActor.js";
import ArcCamera from "../Package/scripts/ArcCamera.js";
import PlayerAccount from "../Package/scripts/PlayerAccount.js";


export default class GameInstance{
  /*TODO: at some point the GameInstance should stop asking the Player Account for information
  * It should already have the object that it needs to build the player actor
  *
  * */

  constructor(){


    canvas = document.querySelector("#renderCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = new WorldScene(engine);
    camera = new ArcCamera(canvas, scene);
    playerActorPlayer = new PlayerActor(playerAccount);
  }




  validatePlayerAccount (){

  };

  makeAccountPlayer (playerAccount){

    /*get player info from DB account and setup player*/
    /*
    * TODO: make a PlayerAccount Object to Query the game object for information
    * the game object will be responsible for facilitating the instantiation of
    * object the Player Account object will house the specific data for the client
    * verified by the database
    *
    * */
    playerActorPlayer.setClass();
    playerActorPlayer.setRace();
    playerActorPlayer.getCharacterItems();




    addPlayerToScene(playerAccount);

    return playerActorPlayer;

  };

  addPlayerToScene(playerAccount){

    var pos = playerAccount.character.location;
    var playerModel = BABYLON.Mesh.CreateSphere(playerAccount.character.archetype, 8, 1, scene);
    playerActorPlayer.playerModel(playerModel);
    playerActorPlayer.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);

  }

  setPlayerToInstance(playerAccount){
    playerCharactersArr.push(playerAccount.character)
  };

  get player(){
    return playerActorPlayer;
  }

  get engine(){
    return engine;
  }

  get scene(){
    return scene;
  }

  get camera(){
    return camera;
  }

  get canvas(){
    return canvas;
  }






}

