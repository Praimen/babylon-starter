
import { WorldScene } from "./WorldScene";
import PlayerActor from "./PlayerActor";
import { ArcCamera } from "./ArcCamera";
import Cookies from 'js-cookie'





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
    this._giCurrCharObjArr = {};
    this._giID = null;
    this._socket.on('connect',()=>{
      this._socket.emit('load_player_to_gi', Cookies.get('gameJWT'));
    })


    this._socket.on('render_other_players',(remotePlayer)=>{
      console.log('loading other players: ',remotePlayer);
      this.makeAccountPlayer(remotePlayer).then((generatedRemotePlayerActor)=>{
        this.addPlayerToScene(generatedRemotePlayerActor).then((inGamePlayer)=>{

          this.setPlayerToInstance(inGamePlayer);
        })
      })

    });

    this._socket.on('player_disc',(data)=>{
      console.log('all data:', data);
      this.removePlayerFromScene(data)
    });

    this._socket.on('player_joined_gi', (player)=>{
      console.log('I joined: ',player);
      if(this._giID == null){
        this._giID = player._id;
      }

      this.makeAccountPlayer(player).then((myPlayerActor)=>{
        this.addPlayerToScene(myPlayerActor);

      })

    });


  }

  validatePlayerAccount (playerAccount){
      var validated = false;
      var accountInGame = true;
    /*TODO: if player account is valid set it, this may need to be a seperate function for setting and validating
    * in which case it may return a boolean for the validation
    *
    * */
    if(playerAccount && !this._giCurrCharObjArr.hasOwnProperty(playerAccount._id) ){
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


  makeAccountPlayer (playerAccount){
    console.log("make player: ",playerAccount);

    return new Promise( (resolve,reject)=>{

        if(playerAccount.currSelectedChar){
          resolve(new PlayerActor(playerAccount, this._socket).init());
        }else{
          reject(new Error("Player Object has no current selected char"))
        }

    });

  }

  addPlayerToScene(playeractor){
    /*TODO: add validation error handling for the method variables*/

      var playerActor = playeractor;
      var playerCharacter = playerActor._character;
      var pos = playerCharacter.location;
      var charModel = BABYLON.Mesh.CreateSphere(playerActor.playerID, 8, 1, this._scene);
      charModel.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);
      charModel.metadata = playerCharacter;
      this._giCurrCharObjArr[playeractor._accountID] = playeractor;
      BABYLON.Tags.AddTagsTo(charModel,"actor player ");


    return new Promise( (resolve,reject)=>{

      if(playeractor){
        resolve(playeractor);
      }else{
        reject(new Error("Player Actor was not added to scene"))
      }

    });


  }


  setPlayerToInstance(playerActorObj){
    console.log('here is the playerActor obj from database generation', playerActorObj);

  }


  removePlayerFromScene(meshID){
    console.log('here is the disconnected party ',meshID );
    delete this._giCurrCharObjArr[meshID];
    this._scene.getMeshByID(meshID).dispose();
    console.log('current gi character arry ',this._giCurrCharObjArr );
  }



  getPlayer(accountID){
      if(this._giCurrCharObjArr[accountID]){
        return this._giCurrCharObjArr[accountID];
      }
  }


  getCharacter(accountID){

    var playerActorObj = this.getPlayer(accountID);
    console.log("Here is the OBJ: ",playerActorObj);
    console.log("Here is the Character: ",playerActorObj._character);
   /* try{
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
    }*/

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

