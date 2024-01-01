import WebSocket, { WebSocketServer } from 'ws';
import { StartFunc as StartFuncOnMessage } from './OnMessage/EntryFile.js';

let wss;

let StartFunc = (server) => {
    wss = new WebSocketServer({ server });

    wss.on("connection", WsOnConnection);
};

let WsOnConnection = (ws, req) => {
    ws.on('message', (data, isBinary) => {
        console.log("aaaaaaaaaaa : ", data.toString(), isBinary);

        StartFuncOnMessage({ inData: data });
        
        setTimeout(function timeout() {
            ws.send(Date.now());
        }, 500);
    });

    ws.on('close', () => {
        console.log('closed');
    });

    // ws.send('Hai Socket established');
    ws.send(Date.now());
};

export { StartFunc };