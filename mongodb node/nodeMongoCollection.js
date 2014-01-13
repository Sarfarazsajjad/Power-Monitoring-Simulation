// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }


/* This function will not actually create a collection on the database until you actually 
   insert the first document.
*/
//db.collection('test', function(err, collection) {});

/* Notice the {strict:true} option. This option will make the driver check if the 
   collection exists and issue an error if it does not.
*/
// db.collection('test', {strict:true}, function(err, collection) {});


/* This command will create the collection on the Mongo DB database before returning the 
   collection object. If the collection already exists it will ignore the creation of the 
   collection.
*/
// db.createCollection('test', function(err, collection) {});



/* The {strict:true} option will make the method return an error if the collection 
   already exists.
*/
  db.createCollection('test', {strict:true}, function(err, collection) {
  	if(!err) console.log("collection created");
  	else console.log("collection already exist");
  });

});