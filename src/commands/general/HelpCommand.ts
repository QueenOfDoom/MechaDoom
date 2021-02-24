import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async(client, message) => {
    message.channel.send(client.embed({ description: 'Commands:\n-> ping' }, message));
    message.delete();
}

export const name: string = 'help';