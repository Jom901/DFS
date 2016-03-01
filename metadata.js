const http = require('http');
const net = require('net');
var fs = require("fs");
var file = "./" + "metadata.db";
var exists = fs.existsSync(file);
var clients = "";
const myport = process.argv[2]

if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE Nodes (ip TEXT, port INTEGER PRIMARY KEY)");
    db.run("CREATE TABLE Files (path TEXT PRIMARY KEY, size INTEGER, filename TEXT, chunks INTEGER)");
    db.run("CREATE TABLE Contains (filename TEXT, ip TEXT, port REFERENCES Nodes(port))")
  }

  
       // var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");
  
//Insert random data
/*
  var rnd;
  for (var i = 0; i < 10; i++) {
    rnd = Math.floor(Math.random() * 10000000);
    stmt.run("Thing #" + rnd);
  }
  
stmt.finalize();
  db.each("SELECT rowid AS id, thing FROM Stuff", function(err, row) {
    console.log(row.id + ": " + row.thing);
  });
});*/ });


var server = net.createServer( function(socket){
	
	//Register node

}).listen(myport);
server.on('connection',function(socket){
		socket.on('data', function(message){
			radds = socket.remoteAddress;
			radds = radds.split(':');
			radds = radds[3];
			roport = socket.remotePort;
			var stmt = db.prepare("INSERT INTO Nodes VALUES (?,?)");
			stmt.run(radds, roport);
			console.log("I registered " +  radds + ":" + roport);
			socket.write('do it');
		});
})
console.log('Server running at tcp://127.0.0.1:'+myport);

