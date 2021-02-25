import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async(client, message) => {
    message.channel.send(client.embed({ 
        description: 'Commands:\n-> ping\n-> prefix [prefix]\n-> uptime' 
    }, message));
    message.delete();
}

export const name: string = 'help';
export const aliases: string[] = ["?"];