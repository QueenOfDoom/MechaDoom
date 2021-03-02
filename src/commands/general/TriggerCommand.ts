import { RunFunction } from '../../interfaces/Command';
import { prefix } from '@/client/ClientCache';

export const run: RunFunction = async(client, message) => {
    let x: string = message.content.substring(prefix.length + name.length).toLowerCase();
    let res: string = "";
    for(let i: number = 0; i < x.length; i++) {
        res += (i % 2 == 0) ? x[i].toUpperCase() : x[i].toLowerCase();
    }
    message.reply(res);
}


export const name: string = 'trigger';
export const description: string = 'DiD yOu MeAn ThIs?';
