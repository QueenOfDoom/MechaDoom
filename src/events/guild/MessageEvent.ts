import { RunFunction } from '../../interfaces/Event';
import { Message } from 'discord.js';
import { Command } from '@/interfaces/Command';

var prefix: string = "<";

export const run: RunFunction = async(client, message: Message) => {
    if(message.author.bot || !message.guild) return;
    // Message Handling
    if(/(^i('|’)?m|^i am) .+/.test(message.content.toLowerCase()) && message.content.length < 25) {
        message.reply(`Hi,${message.content.substring(message.content.indexOf('m')+1)}. I'm dad!`);
    }

    if(!message.content.toLowerCase().startsWith(prefix)) return;
    // Command Handling
    const args: string[] = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd: string = args.shift() || "help";
    const command: Command = <Command> client.commands.get(cmd);
    if(!command) return;
    command
        .run(client, message, args)
        .catch((reason: any) => 
            message.channel.send(
                client.embed({ description: `An error occured: ${reason}!` }, message)
            )
        );
};

export const name: string = 'message';