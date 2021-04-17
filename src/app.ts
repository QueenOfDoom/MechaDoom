import { Config } from './interfaces/Config';
import * as dotenv from 'dotenv';
import { Bot } from './client/Client';

dotenv.config();

const conf: Config = {token: <string> process.env.token};

let bot = new Bot();
bot.start(conf);

export { bot };

// Yeah, that's all I changed - just to say that your commit messages are inferior!