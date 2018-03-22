

export default class PlayerAccount{
  constructor(gameInstance){

    this._account = null;
    this._accountID = "";
    this._gameInstance = gameInstance;
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

  getAccount(acctID){
    this._accountID = acctID;

    this._gameInstance.socket.emit('need account',this._accountID);
    return new Promise( (resolve,reject)=> {
      this._gameInstance.socket.once('got account',(data)=>{

        if (data) {
          resolve(data);
        } else {
          reject(new Error("No account found"))
        }
      })

    });

  }





}


