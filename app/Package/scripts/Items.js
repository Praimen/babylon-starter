

export function Items(gameSocket){



  /*TODO: this function will facilitate the connection to the inventory tables on the DB
  *
  *
  *
  * */

  this._gameSocket = gameSocket;

}

Items.prototype.getCharacterItems = function(playerCharacter){
  var characterItmArr = playerCharacter.items;
  console.log('is the get character items emitting twice', playerCharacter);

  this._gameSocket.emit('query_char_items',characterItmArr);
  return new Promise( (resolve,reject)=> {
    this._gameSocket.once('return_char_items',(data)=>{
      console.log('items from mongo: ', data)
      if (data) {
        resolve(data);
      } else {
        reject(new Error("No items found"))
      }
    })

  });



 /* return itemDatabase.fetch(characterItmArr).then(function(items){

   return Promise.all(items.rows.map (function(item) {
       console.log('here is a new item',item);
       return characterItmArr[item.doc._id] = item.doc;

    }));

  })*/

};
