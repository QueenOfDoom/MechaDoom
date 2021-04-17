import { Message } from 'discord.js';
import { start } from '../../client/ClientCache';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async(client, message) => {
    const time: number = new Date().getTime() - start;
    message.reply(`${client?.user?.tag} is online for ${formatTime(time)}`);
}

const formatTime = (ms: number) => {
    const t_ms = ms % 1000;
    ms -= t_ms; // Removes Millseconds
    const t_s = ((ms)/1000) % 60;
    ms -= (t_s * 1000); // Removes Seconds
    const t_min = (ms/60000) % 60;
    ms -= (t_min * 60000);
    const t_hour = (ms/(60*60*1000)) % 24;
    ms -= (t_hour * 60 * 60 * 1000);
    const t_day = (ms/(24*60*60*1000));

    return `${t_day}d, ${t_hour}h, ${t_min}m, ${t_s}s, ${t_ms}ms`;
}

export const name: string = 'uptime';
export const aliases: string[] = ["up"];
export const description: string = "Checks the current Bot Uptime!";