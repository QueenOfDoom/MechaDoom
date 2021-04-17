import { bot } from '@/app';
import { prefix } from '@/client/ClientCache';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async(client, message) => {
    if(message.author.id !== "756757056941326397") return;

    var name: string = message.content.substring(prefix.length);
    name = name.substring(name.split(/ +/g)[0].length);
    message.guild?.me?.setNickname(name);
}

export const name: string = 'nickname';
export const description: string = "[DEV-LOCK] Changes the nickname of the bot!";
export const aliases: string[] = ["nick"];
