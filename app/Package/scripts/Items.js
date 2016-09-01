

/*SystemJS.import('Items/ItemDB.js');*/
export function Items(){



  /*TODO: this function will facilitate the connection to the inventory tables on the DB
  *
  *
  *
  * */

  return this;
}

Items.prototype.getCharacterItems = function(playerActor){
  var characterInvArr = playerActor.character.items;
  var itemDatabase = new ItemDB();
  var dbresult = [];
  itemDatabase.connect();

  for (var i = 0; i < characterInvArr.length; i++) {
    var itemID = characterInvArr[i];

    /*once each item is read it will need to be sorted into inventory and equipped by reading a flag
    * the new bjects should be pushed into the items array in 2 new objs accordingly
    *
    *
    * */
    dbresult.push(itemDatabase.fetch(itemID));


  }

  itemDatabase.close('finished getting items');

  return dbresult;

};
