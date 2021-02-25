import { RunFunction } from '../../interfaces/Event';
import { Message } from 'discord.js';
import { Command } from '@/interfaces/Command';
import { prefix } from '@/client/ClientCache';

export const run: RunFunction = async(client, message: Message) => {
    if(message.author.bot || !message.guild) return;
    // Message Handling
    if(/(^(i|l)('|’|`|′)?m|^(i|l) am) .+/.test(message.content.toLowerCase()) && message.content.length < 25) {
        const value: number = Math.random();
        if(value < 0.85) {
            message.reply(`Hi,${message.content.substring(message.content.indexOf('m')+1)}. I'm dad!`);
        } else {
            message.reply(`Hi,${message.content.substring(message.content.indexOf('m')+1)}. I'm shy <a:imshy:788145616256892949>`);
        }
    }
    if(/who is (awesome|epic|cool|legendary|boppin|smart|the best)\?/.test(message.content.toLowerCase())) {
        if(message.author.id !== "756757056941326397") {
            message.reply("https://media1.giphy.com/media/bQC7ZxmQ3LdLO/giphy.gif");
        }
    }
    if(/is [\w -]+ (awesome|epic|cool|legendary|boppin|smart|the best)\??/.test(message.content.toLowerCase())) {
        if(message.content.toLowerCase().indexOf("doom") !== -1) {
            message.reply("<:no:794106108247146516>");
        } else message.reply("Of course!");
    }
    if(/m(e+)p/.test(message.content.toLowerCase())) {
        message.channel.send("Meep.");
    }

    if(message.author.id === "225814327242915841") {
        var inpolite: string[] = ["fuck", "shut up", "hoe"];
        for(let i = 0; i < inpolite.length; i++) {
            if(message.content.toLowerCase().indexOf(inpolite[i]) !== -1) {
                message.reply("<:baka:789210166184640552>");
            }
        }
    }

    if(!message.content.toLowerCase().startsWith(prefix)) return;
    // Command Handling
    const args: string[] = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd: string = args.shift() || "help";
    const command: Command = <Command> client.commands.get(cmd) 
        || client.commands.get(client.aliases.get(cmd) || "help");
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