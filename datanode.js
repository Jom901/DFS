const net = require('net');
var fs = require("fs");
var mkdirp = require('mkdirp');
var dir = "./" + "dNode";
var exists = fs.existsSync(dir);
const myport = process.argv[2];

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
		console.log(message);
		socket.destroy();
	});
//net.createServer( function(socket){
	
	//Register node
	/*socket.on('register', function(){
		var stmt = db.prepare("INSERT INTO Nodes VALUES (?)");
		stmt.run(socket.remoteAddress + "," + socket.remotePort);
		client.write("Registered");
	});*/
//}).listen(myport);

console.log('Server running at http://127.0.0.1:'+myport);