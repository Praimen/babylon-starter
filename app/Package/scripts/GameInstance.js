
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
    this._playerAccountChar = null;
    this._playerCharactersArr = [];
    this._canvas = document.querySelector("#renderCanvas");
    this._engine = new BABYLON.Engine(this._canvas, true);
    this._scene = new WorldScene(this._engine);
    this._camera = new ArcCamera(this._canvas , this._scene);
    this._playerActorPlayer = {};
  }

  validatePlayerAccount (playerAccount){

    /*TODO: if player account is valid set it, this may need to be a seperate function for setting and validating
    * in which case it may return a boolean for the validation*/
    this._playerAccount = playerAccount;
    this._playerAccountChar = this._playerAccount[this._playerAccount.currSelectedChar]
  };

  makeAccountPlayer (){

    //this._playerAccount.character = this._playerAccount.currSelectedChar;

    this._playerActorPlayer = new PlayerActor(this._playerAccountChar);
    /*get player info from DB account and setup player*/
    /*
    * TODO: make a PlayerAccount Object to Query the game object for information
    * the game object will be responsible for facilitating the instantiation of
    * object the Player Account object will house the specific data for the client
    * verified by the database
    *
    * */
    this._playerActorPlayer.init();
     /*_playerActorPlayer.getCharacterItems();*/
  }

  addPlayerToScene(){
    /*TODO: add validation error handling for the method variables*/
    var playerCharacter = this._playerAccountChar;
    var pos = playerCharacter.location;
    this._playerActorPlayer.playerModel = BABYLON.Mesh.CreateSphere(playerCharacter.archetype, 8, 1, this._scene);
    this._playerActorPlayer.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);

  }

  setPlayerToInstance(){
    this._playerCharactersArr.push(this._playerAccountChar);
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

