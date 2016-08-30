/**
 * Created by Praimen on 8/17/2016.
 */

export class PlayerAccount{
constructor(){
  this.accountID = "xFER3ik9l";
  this.accountType = "VIP";
  this.accountStatus = "Current";

  this.characterIDArr = ['12345mage',"12345warrior","12345rogue","12345paladin"];
  this.character = {
    characterID:"12345warrior",
    archetype:"warrior",
    race:'human',
    age: 25,
    items : ['itm10000','itm20000'],
    location:{x:0,y:0,z:1}
  };

  return this;
}

}

/*


PlayerAccount.prototype.getAccountCharacters = function(playerIDArr) {

  /!*playerIDArr should be the player IDs from the account*!/
  var gameDatabase = new GameDB();
  gameDatabase.connect();
  for (var i = 0; i < this.characterIDArr.length; i++) {
    var obj = characterIDArr[i];

    /!*pass each ID vs database retrieve it and build and object array*!/
    var dbresult = gameDatabase.fetch(characterIDArr[i]);
    this.charactersObj[characterIDArr[i]] = dbresult;
  }

  gameDatabase.close();
};

PlayerAccount.prototype.selectAccountCharacter = function(playerID){

  /!*Call the game object to instantiate character in the game*!/
  if(this.charactersObj[playerID]){

  }

};

*/
