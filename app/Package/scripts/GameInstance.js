/**
 * Created by B16552 on 8/2/2016.
 */


import { WorldScene } from "./WorldScene.js";
import PlayerActor from "./PlayerActor.js";
import { ArcCamera } from "./ArcCamera.js";



export default class GameInstance{
  /*TODO: at some point the GameInstance should stop asking the Player Account for information
  * It should already have the object that it needs to build the player actor
  *
  * */

  constructor(){
    this._playerAccount = null;
    this._playerCharactersArr = [];
    this._canvas = document.querySelector("#renderCanvas");
    this._engine = new BABYLON.Engine(this._canvas, true);
    this._scene = new WorldScene(this._engine);
    this._camera = new ArcCamera(this._canvas , this._scene);
    this._playerActorPlayer = {};
  }

  validatePlayerAccount (playerAccount){
    //TODO: if player account is valid set it
    this._playerAccount = playerAccount;
  };

  makeAccountPlayer (){
    this._playerActorPlayer = new PlayerActor(this._playerAccount);
    /*get player info from DB account and setup player*/
    /*
    * TODO: make a PlayerAccount Object to Query the game object for information
    * the game object will be responsible for facilitating the instantiation of
    * object the Player Account object will house the specific data for the client
    * verified by the database
    *
    * */

    _playerActorPlayer.setClass();
    /* _playerActorPlayer.setRace();
    _playerActorPlayer.getCharacterItems();*/

    this.addPlayerToScene();

    return this._playerActorPlayer;

  }

  addPlayerToScene(){
    var playerAccount = this._playerAccount;
    var pos = playerAccount.character.location;
    var playerModel = BABYLON.Mesh.CreateSphere(playerAccount.character.archetype, 8, 1, scene);
    this._playerActorPlayer.playerModel(playerModel);
    this._playerActorPlayer.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);

  }

  setPlayerToInstance(){
    this._playerCharactersArr.push(this._playerAccount.character);
  }

  get player(){
    return this._playerActorPlayer;
  }

  get engine(){
    return this._engine;
  }

  get scene(){
    return this._scene;
  }

  get camera(){
    return this._camera;
  }

  get canvas(){
    return this._canvas;
  }


}

