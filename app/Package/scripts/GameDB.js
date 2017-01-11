


export function  GameDB(){
  this.db = new PouchDB('gameDB');
  this.remoteDB = "http://tommie:tester1@localhost:5984/gameDB";
}

GameDB.prototype.connect = function(){

  var opts = {live: true};
  this.db.replicate.to(this.remoteDB, opts, this.syncError);
  this.db.replicate.from(this.remoteDB, opts, this.syncError);

  console.log('connected to DB')
};

GameDB.prototype.syncError = function(){
  console.error('there was a game database sync error');
};

GameDB.prototype.fetch = function(queryStatement){

  return this.db.allDocs({include_docs: true, descending: true, keys: queryStatement}, function(err, doc) {

    if (err) {
      console.log(err);
    }

  });

};

GameDB.prototype.close = function(msg){

  console.log(msg);

};


