var app = require('express').createServer(),
    io = require('socket.io').listen(app);

app.listen(3030);


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var picture = io
    .of('/picture')
    .on('connection', function(socket){
      socket.on("post", function(data){
        console.log(data);
        socket.broadcast.emit("image uploaded", data);
      });
    });

