
import { GameDB } from "./GameDB.js";
export default class PlayerAccount extends GameDB{
  constructor(accountID){
    super();
    this.db = new PouchDB('account');
    this.remoteDB = "http://tommie:tester1@localhost:5984/account";
    /*TODO: build a test interface and..
    in the final implementation this should go out to the db and build an object
    based on the account info ID that would be passed into the constructor
     */
    this.connect();
    this._account = null;
    this._accountID = accountID;


    this.characterIDArr = ['12345mage',"12345warrior","12345rogue","12345paladin"];
    this._character = "" ;

  }

  set character(charID){
    this._character = charID;

  }

  get character(){
    return this._account[this._character];
  }

  get account(){



        return this.fetch(this._accountID).then(function (result) {


            console.log('hey here is the account', result.rows);
            return result.rows;


        }).then((accountObj) => {
          this._account = accountObj;
          return accountObj
        });



  }


  selectedCharObj(charArrIDNum){
    var charArrSelection = this.characterIDArr[charArrIDNum];

  }

  characters() {

    return this.fetch(this.characterIDArr).then(function (characters) {

      return Promise.all(characters.rows.map(function (character) {
        console.log('here is a new item', character);
        return characterItmArr[item.doc._id] = item.doc;

      }));
    })

  }

}


