/**
 * Created by Praimen on 8/17/2016.
 */

function PlayerAccount(){

  this.accountID = "xFER3ik9l";
  this.accountType = "VIP";
  this.accountStatus = "Current";

  this.characterIDArr = ['mage',"warrior","rogue","paladin"];
  this.charactersObj = {};

}



PlayerAccount.prototype.getAccountCharacters = function(playerIDArr) {

  /*playerIDArr should be the player IDs from the account*/
  var gameDatabase = new GameDB();
  gameDatabase.connect();
  for (var i = 0; i < this.characterIDArr.length; i++) {
    var obj = characterIDArr[i];

    /*pass each ID vs database retrieve it and build and object array*/
    var dbresult = gameDatabase.fetch(characterIDArr[i]);
    this.charactersObj[characterIDArr[i]] = dbresult;
  }

  gameDatabase.close();
};

PlayerAccount.prototype.selectAccountCharacter = function(playerID){

  /*Call the game object to instantiate character in the game*/
  if(this.charactersObj[playerID]){

  }

};
