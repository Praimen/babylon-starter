
import { GameDB } from "./GameDB.js";
export default class PlayerAccount extends GameDB{
  constructor(accountID){
    super();
    /*TODO: build a test interface and..
    in the final implementation this should go out to the db and build an object
    based on the account info ID that would be passed into the constructor
     */
    this.connect('account');
    this._account = null;
    this._accountID = accountID;
  }


  set character(charID){
     this._account.currSelectedChar = charID;

  }

  get character(){
    return this._account[this._account.currSelectedChar];
  }

  get accountID(){
    return this._accountID;
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





}


