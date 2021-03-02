import { RunFunction } from '../../interfaces/Command';

let snooze = false;

export const run: RunFunction = async(client, message) => {
    if(message.author.id === "516282651469021185") {
        snooze = true;
    } else {
        message.reply("You ain't Promise! <:pouty_kaguya:703898582574432267>");
    }
}

export const killSnooze = () => {
    snooze = false;
};
export { snooze };
export const name: string = 'ImWorkingDammit';
export const description: string = "[Exlusive: Promise] Snooze the Homework Reminder.";