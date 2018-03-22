

export function Items(gameInstance){



  /*TODO: this function will facilitate the connection to the inventory tables on the DB
  *
  *
  *
  * */

  this._gameInstance = gameInstance;

}

Items.prototype.getCharacterItems = function(playerCharacter){
  var characterItmArr = playerCharacter.items;


  this._gameInstance.socket.emit('query_char_items',characterItmArr);
  return new Promise( (resolve,reject)=> {
    this._gameInstance.socket.once('return_char_items',(data)=>{
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
