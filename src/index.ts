import { WebcastPushConnection } from 'tiktok-live-connector';
import WebSocket from 'ws';

import config from './config/config';
import streamEnd from './events/streamEnd';
import gift from './events/gift';
import like from './events/like';
import chat from './events/chat';

const con = new WebcastPushConnection(config.username);

(async () => {
  try {
    const state = await con.connect();
    console.log(`Connected room-id: ${state.roomId}`);
  } catch (err) {
    console.error(`Failed to connect! ${err}`);
    process.exit(1);
  }
})();

con.on('gift', gift);
con.on('streamEnd', streamEnd);
con.on('like', like);
con.on('chat', chat);

export const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.send('Hello client!');
});
