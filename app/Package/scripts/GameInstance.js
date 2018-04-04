
import { WorldScene } from "./WorldScene.js";
import PlayerActor from "./PlayerActor.js";
import { ArcCamera } from "./ArcCamera.js";





export default class GameInstance{
  /*TODO: at some point the GameInstance should stop asking the Player Account for information
  * It should already have the object that it needs to build the player actor
  *
  * */

  constructor(socket){

    this._socket = socket;
    this._playerCharactersArr = [];
    this._canvas = document.querySelector("#renderCanvas");
    this._engine = new BABYLON.Engine(this._canvas, true);
    this._scene = new WorldScene(this._engine);
    this._camera = new ArcCamera(this._canvas , this._scene);
    this._accountIDCurrCharacterObj = {};


    this._socket.on('connected',(data)=>{
      console.log('socket connected: ',data);

      data.map((val)=>{
        this.makeAccountPlayer(val).then((playerActor)=>{
          this.addPlayerToScene(playerActor)
        })
      });

      this._socket.emit('player_join_gi');

    });

    this._socket.on('player position',function(data){
      console.log('all data:', data);
      console.log('player is at X:%s Y:%s and Z:%s: ',data.x,data.y,data.z);
    });




  }

  validatePlayerAccount (playerAccount){
      var validated = false;
      var accountInGame = true;
    /*TODO: if player account is valid set it, this may need to be a seperate function for setting and validating
    * in which case it may return a boolean for the validation
    *
    * */
    if(playerAccount && !this._accountIDCurrCharacterObj.hasOwnProperty(playerAccount._id) ){
      validated = true;
      accountInGame = false;

    }

    return new Promise( (resolve,reject)=>{
      console.log('valid account is %s and the account object in the game %s',validated,accountInGame);
      if(validated && !accountInGame){

        resolve(playerAccount);
      }else{
        reject(new Error("Player is not valid or is already in the game instance"));
      }

    });


  };

  init(){

  }

  makeAccountPlayer (playerAccount){
    console.log("make player: ",playerAccount)
    //this._playerAccount.character = this._playerAccount.currSelectedChar;


    return new Promise( (resolve,reject)=>{


          if(playerAccount.currSelectedChar){
            resolve(new PlayerActor(playerAccount, this._socket).init());
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

    this._playerAccountChar = playerActorObj[playerActorObj.currSelectedChar];
    this._accountIDCurrCharacterObj[playerActorObj._id] = this._playerAccountChar;
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
    try{
      if(playerActorObj){
        this._socket.emit('player select', playerActorObj._accountID);
      }else{
        throw new Error('No Player Actor Found')
      }


      this._socket.once('build character', (data)=>{
        console.log('server told me to build a character');
        this._socket.emit('player character', playerActorObj._character)
      });

      this._socket.once('need stats',(data)=>{
        this._socket.emit('player stats', playerActorObj._stats)
      });

      return this._socket.once('character built',(characterData)=>{
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

    }catch(ex){
      console.log(ex)
    }

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

