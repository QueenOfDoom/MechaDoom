import { Config } from './interfaces/Config';
import * as dotenv from 'dotenv';
import { Bot } from './client/Client';

dotenv.config();

const conf: Config = {token: <string> process.env.token};

new Bot().start(conf);
