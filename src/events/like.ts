import { LikeObject } from '../types/types';
import { wss } from '../index';

export default (data: LikeObject) => {
  console.log(`${data.uniqueId} liked the livestream`);
  wss.clients.forEach(client => client.send(`${data.uniqueId} liked the livestream`));
};
