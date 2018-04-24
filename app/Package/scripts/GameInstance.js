
import { WorldScene } from "./WorldScene";
import PlayerActor from "./PlayerActor";
import { ArcCamera } from "./ArcCamera";
import Cookies from 'js-cookie'
import {TestScene} from './Scenes/TestScene'
import NPCActor from "./NPCActor";





export default class GameInstance{


  constructor(socket){

    this._socket = socket;
    this._playerCharactersArr = [];
    this._canvas = document.querySelector("#renderCanvas");
    this._engine = new BABYLON.Engine(this._canvas, true);
    this._scene = new WorldScene(this._engine);
    this._camera = new ArcCamera(this._canvas , this._scene);
    this._ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "assets/textures/heightMap.png", 100, 100, 100, 0, 5, this._scene, false);



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

    this._socket.on('render_npc',(npc)=>{
      console.log('loading npc: ',npc);
      this.makeAccountPlayer(npc).then((npcActor)=>{
        this.addPlayerToScene(npcActor).then((inGameNpc)=>{

          this.setPlayerToInstance(inGameNpc);
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
        this._giID = player._id;//bind client to player id
      }

      this.makeAccountPlayer(player).then((myPlayerActor)=>{
        if(this._giID == player._id){//only run for the players client
          if(!myPlayerActor.character.hasOwnProperty('stats')){
            myPlayerActor.initStats()
          }
          myPlayerActor.characterItems();
        }

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


  makeAccountPlayer (gameData){
    console.log("make player: ",gameData);

    return new Promise( (resolve,reject)=>{

      if(gameData){

        if(gameData.currSelectedChar){
          resolve(new PlayerActor(gameData, this._socket).init());
        }else if(gameData.type = "npc") {
          resolve(new NPCActor(gameData, this._socket).init());
        }
        
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
      var charModel = {};
      if(playeractor.type == "npc"){
        charModel = BABYLON.Mesh.CreateSphere(playerActor.playerID, 8, 2, this._scene);
        BABYLON.Tags.AddTagsTo(charModel,"actor npc ");
      }else{
        charModel = BABYLON.MeshBuilder.CreateBox(playerActor.playerID, {height: 1,width:2}, this._scene);
        this._giCurrCharObjArr[playeractor._accountID] = playeractor;
        BABYLON.Tags.AddTagsTo(charModel,"actor player ");
      }
      
      charModel.position = new BABYLON.Vector3(pos.x, pos.y, pos.z);
      charModel.metadata = playerCharacter;
      
     


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


  }

  loadScene(scenename){
    TestScene(this);
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

  get ground(){
    return this._ground;
  }


}

