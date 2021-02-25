import { Message } from 'discord.js';
import { config } from '../../interfaces/Document';
import { RunFunction } from '../../interfaces/Command';
import { prefix, updateCache } from '../../client/ClientCache';

export const run: RunFunction = async(client, message) => {
    var tokens: string[] = message.content.substring(prefix.length).split(/ +/g);
    if(tokens.length <= 1) {
        message.channel.send("Current Prefix is: `" + prefix + "`");
    } else if(tokens.length == 2) {
        await config.findOneAndUpdate( {},
            {
                $set: {prefix: tokens[1]}
            }
        ).then((doc) => {
            updateCache();
            client.user?.setUsername(`[${tokens[1]}] Doom Doom`);
            message.channel.send("Prefix changed to: `" + tokens[1] + "`");
        });
    } else {
        message.channel.send("Too many arguments!");
    }
}

export const name: string = 'prefix';