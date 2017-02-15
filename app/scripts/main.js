import GameInstance from "../Package/scripts/GameInstance.js";
import PlayerAccount from "../Package/scripts/PlayerAccount.js";

var player, gameInstance = new GameInstance();



var playerAccountPromise = new PlayerAccount(["Tommie19","Praimen13"]).account.then((acctObj)=>{
  console.log('inside Promise',acctObj);
    createScene(acctObj).then(()=>{startEngine(gameInstance)});

}).catch(function(err){
    console.error('hey there was an error getting an account',err)
  });


// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
function createScene( playerAcctObj ) {

  console.log('create scene',playerAcctObj);

  var scene = gameInstance.scene;

  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = .5;
  var ground = BABYLON.Mesh.CreateGround("ground1", 12, 12, 2, scene);
  var playerObj =[];
  var playerObjMap;
  for (var i = 0; i < playerAcctObj.length; i++) {

    playerObj.push(playerAcctObj[i].doc);

  }

  playerObjMap = playerObj.map(function(playerobj){return gameInstance.validatePlayerAccount(playerobj)});

  /*TODO: can't keep this Promise.all() because all objects would have to be valid in order for instance to start*/
  return Promise.all(playerObjMap).then((playerAccounts)=> {

    playerAccounts.forEach((playerAccount)=> {

      gameInstance.makeAccountPlayer(playerAccount).then((playerActor)=> {
        console.info('player actor object from' ,playerActor._accountID ,' : ', playerActor);
        gameInstance.addPlayerToScene(playerActor);
      })

    })

  });

}


function startEngine(gameInstance){
  console.log('engine render underway');
  windowCanvasResizeEvent(gameInstance);
  // Register a render loop to repeatedly render the scene
  gameInstance.engine.runRenderLoop(function () {
    //player.position.x +=.005;
    //scene.activeCamera.alpha += .01;
    //gameInstance.scene.render();
  });
}


function windowCanvasResizeEvent(gameInstance){
  window.addEventListener("resize", function () {
    gameInstance.engine.resize();
  });
}
// Watch for browser/canvas resize events
window.addEventListener("click", function () {
  // We try to pick an object
  var scene = gameInstance.scene;
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  var newtext;

  if(pickResult.pickedMesh){
    newtext = document.createTextNode(pickResult.pickedMesh.name);
    p1 = document.getElementById("screen-ui");
    p1.appendChild(newtext);
    console.log(pickResult.pickedMesh.name);
  }

});
