

function ItemDB(){

  this.db = new PouchDB('items');
  this.remoteDB = "http://tommie:tester1@localhost:5984/items";
  return this;
}

ItemDB.prototype = GameDB.prototype;
