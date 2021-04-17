import * as fs from 'fs';
import * as chproc from 'child_process'; 
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '@/client/ClientCache';

export const run: RunFunction = async(client, message) => {
    var item: string = message.content.substring(prefix.length + name.length + 1) + "\n";
    if(item.length < 4) {
        message.reply("Please supply a request!");
    }

    fs.appendFile('todo.txt', (message.author.username + ": " + item), (err) => {
        if (err) console.error(err);

        const exec = chproc.exec;
        exec('wc -l todo.txt', (error, results) => {
            if(error) console.error(error);

            message.reply("Saved To-Do Item: " + results.split(/ /)[0]);
        });
    });
}

export const name: string = 'request';
export const description: string = "Request Doomer's attention / assistance. Puts an item on Doomer's To Do List!";
