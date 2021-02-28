import * as fs from 'fs';
import * as chproc from 'child_process'; 
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '@/client/ClientCache';
import { MessageEmbed } from 'discord.js';
import { promisify } from 'util';

const exec = promisify(chproc.exec);
let cpu, mem, disk;

async function getData() {
    // CPU
    let results = await exec('mpstat')
        .catch(err => console.log('Command Not Found!'));
    cpu = (results || { stdout: "\n\n. . err" }).stdout.split(/\n+/g)[2].split(/ +/g)[2] + "%";
    
    // Memory
    results = await exec("free -m | grep Mem | awk '{print ($3/$2)*100}'")
        .catch(err => console.log('Command Not Found!'));
    mem = (results || { stdout: "  err" }).stdout.substring(0,5) + "%";
    
    // Disk
    results = await exec("df -ht ext4")
        .catch(err => console.log('Command Not Found!'));
    disk = (results || { stdout: "\n00%"}).stdout.split(/\n+/g)[1]!.match(/\d+%/g)![0];
}

export const run: RunFunction = async(client, message) => {
    await getData().then(() => {
        const embed: MessageEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Hardware Statistics')
            .setDescription('Some Hardware Stats about the System this Bot is running on ^^!')
            .addField('CPU Usage:', cpu)
            .addField('Memory Usage:', mem)
            .addField('Disk Usage:', disk)
            .setImage('https://maxcdn.icons8.com/Share/icon/nolan/Programming/system_task1600.png')
            .setTimestamp()
            .setFooter('Gooood, this took long!');
        message.reply(embed);
    });
}

export const name: string = 'sysstat';
export const description: string = "Request System Statistics!";
