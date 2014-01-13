// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('test');
  var docs = [{mykey:1}, {mykey:2}, {mykey:3}];

  collection.insert(docs, {w:1}, function(err, result) {

    collection.remove({mykey:1},function(err,result){});

    collection.remove({mykey:2}, {w:1}, function(err, result) {});

    collection.remove(function(err,result){});
    
    //you have to send a callback function to every operation
  });
});