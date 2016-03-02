const net = require('net');
var fs = require("fs");
var mkdirp = require('mkdirp');
var dir = "./" + "dNode";
var exists = fs.existsSync(dir);
const myport = process.argv[2];
var registered = false;
console.log(myport);
if(!exists){
		console.log("Creating directory")
		mkdirp(dir);
}
metadataHost = '127.0.0.1';
metadataPort = 8080;

socket = new net.Socket();

socket.connect(metadataPort,metadataHost);

socket.on('connect',function(){
	socket.write("hello");

});

socket.on('data', function(message){
		var text = String(message);
		console.log(text);
		if(text == "registered"){
			registered = true;
		}
		socket.destroy();
		if(registered){
			net.createServer( function(socket){
				//Wait for client socket to work
				socket.on('data', function(message){
					console.log("I received a message! it says " + String(message));
				});

			}).listen(myport);
}
console.log('Server running at http://127.0.0.1:'+myport);
});
