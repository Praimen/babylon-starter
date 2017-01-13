
import { ItemDB } from "./Items/ItemDB.js";
export function Items(){



  /*TODO: this function will facilitate the connection to the inventory tables on the DB
  *
  *
  *
  * */


  return this;
}

Items.prototype.getCharacterItems = function(playerCharacter){
  var characterItmArr = playerCharacter.items;
  var itemDatabase = new ItemDB();
  itemDatabase.connect('items');
  itemDatabase.close('finished getting items');

  return itemDatabase.fetch(characterItmArr).then(function(items){

   return Promise.all(items.rows.map (function(item) {
       console.log('here is a new item',item);
       return characterItmArr[item.doc._id] = item.doc;

    }));

  })

};
