/**
 * Created by B16552 on 8/2/2016.
 */


import WorldScene from "../Package/scripts/WorldScene.js";
import PlayerActor from "../Package/scripts/PlayerActor.js";
import ArcCamera from "../Package/scripts/ArcCamera.js";



export class GameInstance{
  /*TODO: at some point the GameInstance should stop asking the Player Account for information
  * It should already have the object that it needs to build the player actor
  *
  * */

  constructor(){
    this._playerAccount = null;
    this._playerCharactersArr = [];
    this._canvas = document.querySelector("#renderCanvas");
    this._engine = new BABYLON.Engine(canvas, true);
    this._scene = new WorldScene(engine);
    this._camera = new ArcCamera(canvas, scene);
    this._playerActorPlayer = {};
  }

  validatePlayerAccount (playerAccount){
    //TODO: if player account is valid set it
    _playerAccount = playerAccount;
  };

  makeAccountPlayer (){
    _playerActorPlayer = new PlayerActor(_playerAccount);
    /*get player info from DB account and setup player*/
    /*
    * TODO: make a PlayerAccount Object to Query the game object for information
    * the game object will be responsible for facilitating the instantiation of
    * object the Player Account object will house the specific data for the client
    * verified by the database
    *
    * */
   /* _playerActorPlayer.setClass();
    _playerActorPlayer.setRace();
    _playerActorPlayer.getCharacterItems();*/

    this.addPlayerToScene();

    return _playerActorPlayer;

  }

  addPlayerToScene(){
    var playerAccount = _playerAccount;
    var pos = playerAccount.character.location;
    var playerModel = BABYLON.Mesh.CreateSphere(playerAccount.character.archetype, 8, 1, scene);
    _playerActorPlayer.playerModel(playerModel);
    _playerActorPlayer.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);

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

