import BABYLON from 'babylonjs';
import io from 'socket.io-client';


import GameInstance from "../Package/scripts/GameInstance.js";
import PlayerAccount from "../Package/scripts/PlayerAccount.js";

var player, playerMesh,gamesocket = io('http://165.227.109.107:3000',  { transports: ['websocket'], upgrade: false }),
  gameInstance = new GameInstance(gamesocket);


// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene() {
  gameInstance.loadScene('test');
  let scene = gameInstance.scene;
  let ground = gameInstance.ground;




  scene.actionManager = new BABYLON.ActionManager(scene);
  scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, (evt) => {

    if(playerMesh){
      if (evt.sourceEvent.key == "w") {
        playerMesh.__W_Pressed = true;
      }

      if (evt.sourceEvent.key == "s") {
        playerMesh.__S_Pressed = true;
      }

      if (evt.sourceEvent.key == "a") {
        playerMesh.__A_Pressed = true;
      }

      if (evt.sourceEvent.key == "d") {
        playerMesh.__D_Pressed = true;
      }
    }

  }));

  scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, (evt) => {

    if(playerMesh){

      if (evt.sourceEvent.key == "w") {
        playerMesh.__W_Pressed = false;
      }

      if (evt.sourceEvent.key == "s") {
          playerMesh.__S_Pressed = false;
      }

      if (evt.sourceEvent.key == "a") {
          playerMesh.__A_Pressed = false;
      }

      if (evt.sourceEvent.key == "d") {
          playerMesh.__D_Pressed = false;

      }
    }

  }));

  scene.registerBeforeRender(function(){
    if(!scene.isReady()) return;
    playerMesh = gameInstance.scene.getMeshByID(gameInstance._giID);
    gameInstance.camera.lockedTarget = playerMesh;


    var ray = new BABYLON.Ray(new BABYLON.Vector3(playerMesh.position.x, ground.getBoundingInfo().boundingBox.maximumWorld.y + 1, playerMesh.position.z),
      new BABYLON.Vector3(0, -1, 0)); // Direction
    var worldInverse = new BABYLON.Matrix();

    ground.getWorldMatrix().invertToRef(worldInverse);

    ray = BABYLON.Ray.Transform(ray, worldInverse);

    var pickInfo = ground.intersects(ray);

    if (pickInfo.hit) {
      playerMesh.position.y = pickInfo.pickedPoint.y + 0.5;
    }

    if(playerMesh){
      if(playerMesh.__W_Pressed) {
        playerMesh.translate(BABYLON.Axis.X, -0.1, BABYLON.Space.LOCAL);
        //console.log("here is the player position: x:%s  y:%s  z:%s" ,playerMesh.position.x,playerMesh.position.y,playerMesh.position.z)
        gamesocket.emit('player_move', {id: playerMesh.name, position: playerMesh.position})
      }
      if(playerMesh.__S_Pressed){
        playerMesh.translate(BABYLON.Axis.X, 0.1, BABYLON.Space.LOCAL);
        gamesocket.emit('player_move', {id: playerMesh.name, position: playerMesh.position})
      }
      if(playerMesh.__A_Pressed){
        playerMesh.rotate(BABYLON.Axis.Y, -0.1, BABYLON.Space.LOCAL);
        gameInstance.camera.rotationOffset -= 0.1;
        gamesocket.emit('player_move', {id: playerMesh.name, position: playerMesh.position})
      }
      if(playerMesh.__D_Pressed){
        playerMesh.rotate(BABYLON.Axis.Y, 0.1, BABYLON.Space.LOCAL);
        gameInstance.camera.rotationOffset += 0.1;
        gamesocket.emit('player_move', {id: playerMesh.name, position: playerMesh.position})

      }
    }
  });





}

function sendCurrentPlayerPos(){
  let playerMesh1 = playerMesh;
  gamesocket.emit('saved_player_position',{id: playerMesh1.name, position: playerMesh1.position})
}

function startEngine(){
  console.log('engine render underway');
  windowCanvasResizeEvent(gameInstance);
  // Register a render loop to repeatedly render the scene
  gameInstance.engine.runRenderLoop(function () {
    //player.position.x +=.005;
    //scene.activeCamera.alpha += .01;
    gameInstance.scene.render();
  });
}


function windowCanvasResizeEvent(gameInstance){
  window.addEventListener("resize", function () {
    gameInstance.engine.resize();
  });
}


createScene();
startEngine();


// Watch for browser/canvas resize events
window.addEventListener("click", function () {
  // We try to pick an object
  let scene = gameInstance.scene;
  let pickResult = scene.pick(scene.pointerX, scene.pointerY);
  let newtext;


  if(pickResult.pickedMesh){

    let p1 = document.getElementById("screen-ui");
    newtext = document.createTextNode(pickResult.pickedMesh.name);
    p1.appendChild(newtext);
    console.log(pickResult.pickedMesh.name);

    if(pickResult.pickedMesh.matchesTagsQuery("actor && player")){
      //playerMesh = gameInstance.scene.getMeshByID(pickResult.pickedMesh.name);
      gameInstance.getCharacter(pickResult.pickedMesh.name);


    }

  }

});




gamesocket.on('broadcast_player_move',function(data){
  var oPlayer = gameInstance.scene.getMeshByID(data.id);
  oPlayer.position = data.position;
})

gamesocket.on('player_joined_gi',function(player){
  setInterval(sendCurrentPlayerPos,10000);
});





