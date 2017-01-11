
import { GameDB } from "../GameDB.js";
export function ItemDB(){

  this.db = new PouchDB('items');
  this.remoteDB = "http://tommie:tester1@localhost:5984/items";

}

ItemDB.prototype = GameDB.prototype;
