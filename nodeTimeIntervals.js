var counter = 0

var interval = setInterval(function(){
	console.log("hello");
	counter++;
	if(counter == 5) clearInterval(interval);
},1000);  //calls function every second

setTimeout(function(){
");
	counter++;
	if(counter == 5) clearInterval(interval);
},1000);