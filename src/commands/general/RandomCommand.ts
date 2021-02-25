import { prefix } from '../../client/ClientCache';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async(client, message) => {
    var tokens: string[] = message.content.substring(prefix.length).split(/ +/g);
    if(tokens.length <= 1) {
        message.channel.send(Math.round(Math.random()*Number.MAX_SAFE_INTEGER));
    } else if(tokens.length == 2) {
        const x: number = Number.parseInt(tokens[1]);
        if(x !== NaN) {
            message.channel.send(Math.round(Math.random()*x));
        } else {
            message.channel.send(`${tokens[1]} is not a number!`);
        }
    } else if(tokens.length == 3) {
        const x: number = Number.parseInt(tokens[1]);
        const y: number = Number.parseInt(tokens[2]);
        if(x !== NaN && y !== NaN) {
            message.channel.send(Math.round(Math.random()*(y-x) + x));
        } else {
            message.channel.send(`${tokens[1]} and/or ${tokens[1]} is not a number!`);
        }
    } else {
        message.channel.send(`Too many arguments!`);
    }
}

export const name: string = 'random';