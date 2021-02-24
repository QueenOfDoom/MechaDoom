import * as glob from 'glob';
import { promisify } from 'util';
import { Client, MessageEmbedOptions, Message, MessageEmbed, Intents, Collection } from 'discord.js';

import { Config } from '../interfaces/Config';
import { Command } from '../interfaces/Command';
import { Event } from '../interfaces/Event';

const globPromise = promisify(glob);

class Bot extends Client {
    public config!: Config;
    public commands: Collection<string, Command> = new Collection();
    public events: Collection<string, Event> = new Collection();
    public constructor() {
        super({ ws: { intents: Intents.ALL }, messageCacheLifetime: 180, messageCacheMaxSize: 200, messageEditHistoryMaxSize: 200, messageSweepInterval: 180 });
    };
    public async start(config: Config): Promise<void> {
        this.config = config;
        this.login(config.token);

        // Command Collection
        const commandFiles: string[] = await globPromise(`${__dirname}/../commands/**/*{.ts,.js}`);
        commandFiles.map(async(value: string) => {
            const file: Command = await import(value);
            this.commands.set(file.name, file);

        });
        
        // Event Collection
        const eventFiles: string[] = await globPromise(`${__dirname}/../events/**/*{.ts,.js}`);
        eventFiles.map(async(value: string) => {
            const file: Event = await import(value);
            this.events.set(file.name, file);
            this.on(file.name, file.run.bind(null, this));
        });
    };
    public embed(options: MessageEmbedOptions, message: Message): MessageEmbed {
        return new MessageEmbed({ ...options, color: 'RANDOM' }).setFooter(
            `${message.author.tag} | ${this.user?.username}`, 
            message.author.displayAvatarURL({ format: 'png', dynamic: true})
        );
    }
};

export { Bot };
