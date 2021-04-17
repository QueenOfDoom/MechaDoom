import { RunFunction } from '../../interfaces/Command';
import { prefix } from '@/client/ClientCache';

export const run: RunFunction = async(client, message) => {
    if(message.author.id === '756757056941326397') {
        let name: string = message.content.substring(prefix.length + 1);
        if(name.length < 4) message.channel.send('Did you forget the name?');
        else message.guild?.setName(name);
    } else {
        message.reply('Nah.');
    }
}

export const name: string = 'test';
export const description: string = "Literally a Test Command - will do nothing most of the time.";
export const aliases: string[] = ["t"];
