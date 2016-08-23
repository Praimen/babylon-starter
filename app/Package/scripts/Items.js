/**
 * Created by B16552 on 8/10/2016.
 */


function Items(playerActor){
  System.import('Items/ItemDB.js');
  this.characterInvArr = playerActor.character.items;

  /*TODO: this function will facilitate the connection to the inventory tables on the DB
  *
  *
  *
  * */


}

Items.prototype.getCharacterItems = function(){

  var itemDatabase = new ItemDB();
  itemDatabase.connect();

  for (var i = 0; i < this.characterInvArr.length; i++) {
    var obj = characterIDArr[i];

    /*once each item is read it will need to be sorted into inventory and equipped by reading a flag
    * the new bjects should be pushed into the items array in 2 new objs accordingly
    *
    *
    * */
    var dbresult = itemDatabase.fetch(characterInvArr[i]);
    if(dbresult.equipped = true){
      playerActor.items.eq[characterInvArr[i]] = dbresult;
    }else{
      playerActor.items.inv[characterInvArr[i]] = dbresult;
    }

  }

  itemDatabase.close();
};
