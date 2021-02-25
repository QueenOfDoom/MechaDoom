import { prefix } from '../../client/ClientCache';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async(client, message) => {
    var tokens: string[] = message.content.substring(prefix.length).split(/ +/g);
    if(tokens.length <= 1) {
        message.channel.lastMessage?.delete();
    } else if(tokens.length == 2) {
        const x: number = Number.parseInt(tokens[1]);
        if(x !== NaN) {
            message.channel.messages.fetch({ limit: x })
                .then(messages => {
                    messages.forEach((message) => {
                        message.delete();
                    });
                });
        }
    } else {
        message.channel.send(`Too many arguments!`);
    }
}

export const name: string = 'purge';