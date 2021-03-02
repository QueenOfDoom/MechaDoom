import { MessageEmbed } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
import { bot } from '@/app';

export const run: RunFunction = async(client, message) => {
    const embed: MessageEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Help')
        .setDescription('Here you have the new absolutely epic help prompt!');

    bot.commands.forEach(command => {
        embed.addField(command.name, command.description);
    });

    embed.setImage('https://cdn.discordapp.com/emojis/789210976770981938.png');
    embed.setTimestamp();
    embed.setFooter("Isn't this epic?");

    message.channel.send(embed);
}

export const name: string = 'help';
export const description: string = "The Help Command.";
export const aliases: string[] = ["?"];
