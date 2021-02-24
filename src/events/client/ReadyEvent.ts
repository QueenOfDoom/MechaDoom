import { Bot } from '@/client/Client';
import { RunFunction } from '../../interfaces/Event';

export const run: RunFunction = async(client: Bot) => {
    console.log(`${client!.user!.tag} is now online!`);
}

export const name: string = 'ready';
