import { RunFunction } from '../../interfaces/Event';
import { Message, TextChannel } from 'discord.js';
import { Command } from '@/interfaces/Command';
import { prefix } from '@/client/ClientCache';
import { logger } from '@/client/ClientLogger';
import { handleMessages } from '@/features/NCMessages';

export const run: RunFunction = async(client, message: Message) => {
    if(message.author.bot || !message.guild) return;
    handleMessages(message);

    if(!message.content.toLowerCase().startsWith(prefix)) return;
    // Command Handling
    logger.info(`${message.author.tag} issued "${message.content}"`);
    const args: string[] = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd: string = args.shift() || "help";
    const command: Command = <Command> client.commands.get(cmd) 
        || client.commands.get(client.aliases.get(cmd) || "help");
    if(!command) return;
    
    command.run(client, message, args).catch((reason: any) => 
        message.channel.send(
            client.embed({ description: `An error occured: ${reason}!` }, message)
        )
    );
};

export const name: string = 'message';
