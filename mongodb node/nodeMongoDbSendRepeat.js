// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
	
	var collection = db.collection('test');
	//var doc2 = { "doc2":"hello2"};
		
	var repeatCounter = 0;
	var repeatingFunction = setInterval(function(){  //this function will run five times
	
		var doc1 = { "doc1":"hello1"};
	 	
		collection.insert(doc1,function(err,result){	//this function will insert doc1 into test collection
			if(!err) console.log("insert success");
			else console.log("error while insertion");
		})
	
			
		repeatCounter++;
		if(repeatCounter==5)clearInterval(repeatingFunction); //this will stop repeating function after 5 times
		
	},1000);
	 
	
  }
});