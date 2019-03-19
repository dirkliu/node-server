// ws：是nodejs的一个WebSocket库，可以用来创建服务。 https://github.com/websockets/ws
var WebSocketServer = require('ws').Server, wss = new WebSocketServer({ port: 8181 }); 
wss.on('connection', function (ws) {   
  console.log('client connected');   
  ws.on('message', function (message) {     
    console.log(message);  
    ws.send('server received: ' + message) 
  }); 
}); 
