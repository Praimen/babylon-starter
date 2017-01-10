


function GameDB(){
  this.db = new PouchDB('gameDB');
  this.remoteDB = "http://tommie:tester1@localhost:5984/items";
}

GameDB.prototype.connect = function(){

    var opts = {live: true};
    this.db.replicate.to(this.remoteDB, opts, syncError);
    this.db.replicate.from(this.remoteDB, opts, syncError);

  console.log('connected to DB')
};

GameDB.prototype.fetch = function(queryStatement){
  var resultSet = this.db.allDocs({include_docs: true, descending: true, keys: queryStatement}, function(err, doc) {

    if (err) {
      return console.log(err);
    }else{
      console.log(doc.rows);
    }

  });


  return resultSet;

};

GameDB.prototype.close = function(msg){

  console.log(msg);

};


