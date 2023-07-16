import { ChatObject } from '../types/types';
import config from '../config/config';

export default (data: ChatObject) => {
  console.log(`${data.uniqueId}: ${data.comment}`);
  const { uniqueId, comment } = data;

  if (!comment.startsWith(config.commandPrefix)) return;
};
