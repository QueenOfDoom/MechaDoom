import { Message } from 'discord.js';
import { start } from '../../client/ClientCache';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async(client, message) => {
    const time: Date = new Date(new Date().getTime()-start);
    console.log("Got here!");
    message.reply(`${client?.user?.tag} is online for ${time.toISOString().substr(11,8)}`);
}

export const name: string = 'uptime';
export const aliases: string[] = ["up"];