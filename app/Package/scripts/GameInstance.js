
import { WorldScene } from "./WorldScene.js";
import PlayerActor from "./PlayerActor.js";
import { ArcCamera } from "./ArcCamera.js";
import io from 'socket.io-client';




export default class GameInstance{
  /*TODO: at some point the GameInstance should stop asking the Player Account for information
  * It should already have the object that it needs to build the player actor
  *
  * */

  constructor(){
  /*  this._playerAccount = null;
    this._playerAccountChar = null;*/
    this._socket = io('http://165.227.109.107:3000',  { transports: ['websocket'], upgrade: false });
    this._playerCharactersArr = [];
    this._canvas = document.querySelector("#renderCanvas");
    this._engine = new BABYLON.Engine(this._canvas, true);
    this._scene = new WorldScene(this._engine);
    this._camera = new ArcCamera(this._canvas , this._scene);
    this._playerActorPlayer = {};


    this._socket.on('connected',function(data){
      console.log('socket connected: ',data);

    });

    this._socket.on('player position',function(data){
      console.log('all data:', data);
      console.log('player is at X:%s Y:%s and Z:%s: ',data.x,data.y,data.z);
    });



  }

  validatePlayerAccount (playerAccount){
      var validated = true;
    /*TODO: if player account is valid set it, this may need to be a seperate function for setting and validating
    * in which case it may return a boolean for the validation*/


    return new Promise( (resolve,reject)=>{
      if(validated){
       /* this._playerAccount = playerAccount;
        this._playerAccountChar = this._playerAccount[this._playerAccount.currSelectedChar];*/
        resolve((playerAccount));
      }else{
        reject(new Error("Player has not been validated"));
      }

    });


  };

  makeAccountPlayer (playerAccount){
    console.log("make player: ",playerAccount)
    //this._playerAccount.character = this._playerAccount.currSelectedChar;

    return new Promise( (resolve,reject)=>{
        if(playerAccount.currSelectedChar){
          resolve(new PlayerActor(playerAccount).init());
        }else{
          reject(new Error("Player Object has no current selected char"))
        }

    });



    /*get player info from DB account and setup player*/
    /*
    * TODO: make a PlayerAccount Object to Query the game object for information
    * the game object will be responsible for facilitating the instantiation of
    * object the Player Account object will house the specific data for the client
    * verified by the database
    *
    * */

     /*_playerActorPlayer.getCharacterItems();*/
  }

  addPlayerToScene(playeractor){
    /*TODO: add validation error handling for the method variables*/
    var playerActor = playeractor;
    var playerCharacter = playerActor._character;
    var pos = playerCharacter.location;
    playerActor._model = BABYLON.Mesh.CreateSphere(playerActor.playerID, 8, 1, this._scene);
    playerActor._model.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);
    this.setPlayerToInstance(playeractor);

  }

  setPlayerToInstance(playerActorObj){

    this._playerCharactersArr.push(playerActorObj);
  }



  getPlayer(accountID){


    for (var i = 0; i < this._playerCharactersArr.length; i++) {
      var playerObj = this._playerCharactersArr[i];

      if(playerObj._accountID == accountID){
        return playerObj;
      }

    }


  }


  getCharacter(accountID){

    var playerActorObj = this.getPlayer(accountID);
    console.log(playerActorObj);
    this._socket.emit('player select', playerActorObj._accountID);
    /*this._socket.emit('player accountID', playerActorObj._accountID);
    this._socket.emit('player character', playerActorObj._character);
    this._socket.emit('player stats', playerActorObj._stats);
*/  this._socket.on('build character',(data)=>{
      console.log('selected character data for:', data);

      this._socket.emit('player character', playerActorObj._character);
    });

    this._socket.on('need stats',(data)=>{
      this._socket.emit('player stats', playerActorObj._stats);
    });

    return this._socket.on('character built',(characterData)=>{
      console.log('selected character data built:', characterData);
      try{


        if(characterData){

          return characterData;
        }else{
          throw new Error('No Character found on this account')
        }

      }catch(ex){
        console.error(ex)
      }
    });



  }

  get socket(){
    return this._socket;
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

