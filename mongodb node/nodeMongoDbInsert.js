// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('test');
  var doc1 = {'hello2':'doc12'};
  var doc2 = {'hello':'doc2'};
  var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

   //this is not allowed you Cannot use a writeConcern without a provided callback
  //collection.insert(doc1);
  
  collection.insert(doc2, function(err, result) {
  	if(!err) console.log("insert success");
  	else console.log("insert failed");
  });

  //Using the {w:1} option ensure you get the error back if the document fails to insert correctly.
  collection.insert(doc2, {w:1}, function(err, result) {
  	if(!err) console.log("insert success");
  	else console.log("insert failed");
  });
  
  /*A batch insert of document with any errors being reported. 
  This is much more efficient if you need to insert large batches of documents
  as you incur a lot less overhead.*/
 collection.insert(lotsOfDocs, {w:1}, function(err, result) {
	if(!err) console.log("insert success");
  	else console.log("insert failed");
  });

});
