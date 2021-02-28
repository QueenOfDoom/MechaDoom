import * as fs from 'fs';
import * as chproc from 'child_process'; 
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '@/client/ClientCache';

export const run: RunFunction = async(client, message) => {
    var item: string = message.content.substring(prefix.length + name.length + 1) + "\n";
    const exec = chproc.exec;
    exec('mpstat', (error, results) => {
        if(error) {
            console.log("Command Not Found!");
        }

        console.log(results);
    });
}

export const name: string = 'sysstat';
export const description: string = "Request System Statistics!";