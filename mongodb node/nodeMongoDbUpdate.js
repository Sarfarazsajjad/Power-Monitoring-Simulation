// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('test');
  var doc = {mykey:1, fieldtoupdate:1};

//first insert a document then in call back update 
//   collection.insert(doc, {w:1}, function(err, result) {
//     collection.update({mykey:1}, {$set:{fieldtoupdate:2}}, {w:1}, function(err, result) {});
//   });

   var doc2 = {mykey:2, docs:[{doc1:1}]};
//  
//    collection.insert(doc2, {w:1}, function(err, result) {
//      collection.update({mykey:2}, {$push:{docs:{doc2:1}}}, {w:1}, function(err, result) {});
//    });

	//collection.insert(doc2, {w:1}, function(err, result) {});
	//collection.update({mykey:2}, {$push:{docs:{doc2:1}}}, {w:1}, function(err, result) {});
    //using the atomic operation $push. This allows you to modify keep such structures as queues in Mongo DB.
});

//{w:1} is write concern value

/*
$inc - increment a particular value by a certain amount
$set - set a particular value
$unset - delete a particular field (v1.3+)
$push - append a value to an array
$pushAll - append several values to an array
$addToSet - adds value to the array only if its not in the array already
$pop - removes the last element in an array
$pull - remove a value(s) from an existing array
$pullAll - remove several value(s) from an existing array
$rename - renames the field
$bit - bitwise operations
*/
