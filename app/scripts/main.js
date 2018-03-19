import BABYLON from 'babylonjs'
import io from 'socket.io-client';

import GameInstance from "../Package/scripts/GameInstance.js";
import PlayerAccount from "../Package/scripts/PlayerAccount.js";

var player, gameInstance = new GameInstance();

const socket = io('http://droplet.forgegraphics.com');
var playerAccountPromise = function(acct){
  return new PlayerAccount(acct).account;
};



// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene(playerAcctObjArr ) {

  console.log('create scene',playerAcctObjArr);

  var scene = gameInstance.scene;

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = .5;
  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);
  var materialGround = new BABYLON.StandardMaterial("texture1", scene);
  ground.material = materialGround;
  materialGround.diffuseTexture = new BABYLON.Texture("images/textures/grass.jpg", scene);

  /*var playerObjArr =[];

  for (var i = 0; i < playerAcctObjArr.length; i++) {

    playerObjArr.push(playerAcctObjArr[i].doc);

  }*/

}

function startEngine(gameInstance){
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
startEngine(gameInstance);













// Watch for browser/canvas resize events
window.addEventListener("click", function () {
  // We try to pick an object
  var scene = gameInstance.scene;
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  var newtext;

  if(pickResult.pickedMesh){
    newtext = document.createTextNode(pickResult.pickedMesh.name);
    var p1 = document.getElementById("screen-ui");
    p1.appendChild(newtext);
    console.log(pickResult.pickedMesh.name);
    socket.emit('player selected', gameInstance.getCharacter(pickResult.pickedMesh.name));
    console.log(gameInstance.getCharacter(pickResult.pickedMesh.name))
  }

});


window.addPlayer = function(clientPlayerAcct){


//"Tommie19","Praimen13"
  playerAccountPromise([clientPlayerAcct]).then((acctObj)=>{
    console.log('inside Promise',acctObj);
    var singleAccount = acctObj[0].doc;
    gameInstance.validatePlayerAccount(singleAccount).then((playerAccount)=>{

      gameInstance.makeAccountPlayer(playerAccount).then((playerActor)=> {
        console.info('player actor object from' ,playerActor._accountID ,' : ', playerActor);
        player = playerActor;
        gameInstance.addPlayerToScene(playerActor);
      })

    });

  }).catch(function(err){
    console.error('hey there was an error getting an account',err)
  });





};

window.getPlayerChar = function(accountID){
  return gameInstance.getPlayer(accountID)


};

window.getPlayerInfo = function(account, accountChar ){

};
