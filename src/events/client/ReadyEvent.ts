import { Bot } from '@/client/Client';
import { RunFunction } from '../../interfaces/Event';
import { handleSchedules } from '@/features/SRMessages';

export const run: RunFunction = async(client: Bot) => {
    console.log(`${client!.user!.tag} is now online!`);
    handleSchedules(client);
}

export const name: string = 'ready';
