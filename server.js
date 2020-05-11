console.log("WebSocket Server is Listening...");

// WebSocketサーバー
const server = require('ws').Server;
const s = new server({port:5001});

// OSC Sender
const hosturl = "127.0.0.1";
const oscport = 8000;
const oscsender = require('omgosc').UdpSender;
const sender = new oscsender(hosturl, oscport);

// WebSocketで受信したmessageをOSC送信する
s.on('connection', ws => {
    ws.on('message', message => {
		console.log("Received: " + message);
        const mes = JSON.parse(message);
        if(mes.osc){
            sender.send(mes.path, mes.type, mes.data);
        }
    });
    ws.on('close', () => {
        console.log('Connection to client lost');
    });
});
