


export function  GameDB(){
  this.db = "";
  this.remoteDB = "";
}

GameDB.prototype.connect = function(databaseName){
  console.log('connect to database: ',databaseName);

  this.remoteDB = "http://tommie:tester1@localhost:5984/"+databaseName;
  this.db = new PouchDB(this.remoteDB);

  this.db.sync(this.remoteDB , {
    live: false,
    retry: true
  }).on('change', function (info) {
    console.log ('hey the database changed', info)
  })


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


