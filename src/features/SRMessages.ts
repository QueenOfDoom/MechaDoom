// Scheduled Recurrent Messages
import { Bot } from '@/client/Client';
import { MessageEmbed, TextChannel } from 'discord.js';
import * as schedule from 'node-schedule';

export function handleSchedules(client: Bot) {
    const bdaysYuri = [
        schedule.scheduleJob({ month: 1, date: 5, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@322069361852416005>!");
        }), //Spen
        schedule.scheduleJob({ month: 1, date: 9, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@252206984600748032>!");
        }), // Amph
        schedule.scheduleJob({ month: 1, date: 18, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@459732123608285195>!");
        }), // Shane
        schedule.scheduleJob({ month: 2, date: 17, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@570352681860726792>!");
        }), // Bee
        schedule.scheduleJob({ month: 2, date: 28, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@508485846698033162>!");
        }), // Jamon
        schedule.scheduleJob({ month: 3, date: 26, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@449113371489599489>!");
        }), // Kari
        schedule.scheduleJob({ month: 3, date: 27, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@615211810462892059>!");
        }), // Kazu
        schedule.scheduleJob({ month: 4, date: 7, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@319249916000075778>!");
        }), // Stress
        schedule.scheduleJob({ month: 4, date: 22, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@754575352998658049>!");
        }), // Tari
        schedule.scheduleJob({ month: 4, date: 26, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@556535304635285536>!");
        }), // Mango
        schedule.scheduleJob({ month: 4, date: 29, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@515989471607521305>!");
        }), // Agye
        schedule.scheduleJob({ month: 5, date: 12, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@396099618590425088>!");
        }), // Popaupau
        schedule.scheduleJob({ month: 5, date: 13, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@699071249137008700>!");
        }), // Astrix
        schedule.scheduleJob({ month: 5, date: 24, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@584092110009925656>!");
        }), // Mari
        schedule.scheduleJob({ month: 5, date: 25, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@669927605037695014>!");
        }), // Paladin
        schedule.scheduleJob({ month: 9, date: 14, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@225814327242915841>!");
        }), // Snowiee
        schedule.scheduleJob({ month: 9, date: 20, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@329113620921450497>!");
        }), // Kami
        schedule.scheduleJob({ month: 20, date: 25, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@601462238703779849>!");
        }), // Zoe
        schedule.scheduleJob({ month: 11, date: 6, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@772524248090542130>!");
        }), // Almonds
        schedule.scheduleJob({ month: 11, date: 27, hour: 11, minute: 0, second: 0 }, () => {
            sendMessage(client, "703091755637145661", "general", "Happy Birthday <@516282651469021185>!");
        }) // Promiselight
    ];

    // Every 2 Hours:
    const rule = new schedule.RecurrenceRule();
    rule.hour = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
    rule.minute = 0;
    
    const reminders = [
        schedule.scheduleJob(rule, () => {
            sendMessage(client, "703091755637145661", "general", "Remember to Hydrate <:water:789227387308998706>!");
        })
    ];
}

function sendMessage(client: Bot, guildID: string, channelName: string, message: string | MessageEmbed) {
    client.guilds.fetch(guildID).then(guild => {
        (<TextChannel> guild!.channels.cache.find(channel => channel.name === channelName))
            .send(message);
    });
}