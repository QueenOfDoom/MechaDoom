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

export const change = () => {
    name = "" + Math.floor((Math.random()*1000000)+1);
};

export { snooze };
export var name: string = 'WhyIsThisCommandSuddenlySoFrickingLong';
export const description: string = "[Exlusive: Promise] Snooze the Homework Reminder. [Edit: To make it harder xD]";
export const aliases: string[] = ["IWD"];

