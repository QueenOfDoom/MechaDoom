// Non-Command Messages 
// [https://cloud.spennorex.net/index.php/s/ZtdsxD2ngpqkmmi]  
// [https://trello.com/b/qp8OA4F8/server-projects]

import { Message, MessageEmbed, TextChannel } from "discord.js";
import * as fs from 'fs';

let messageCount = 0;
let mudaeToGeneral = 0;
let snow_chance = Math.round(Math.random()*2500);
let facts: Fact[] = JSON.parse(fs.readFileSync('assets/facts.json', 'utf-8'));

interface Fact {
    fact: string,
    image: string,
    rarity: string
}

function choose<T>(array: T[]): T {
    return array[Math.floor(Math.random()*array.length)];
}


export function handleMessages(message: Message) {
    messageCount++;
    console.log("Message Received! (" + mudaeToGeneral + " / " + snow_chance + " / " + messageCount + ")");
    
    // DAD BOT
    if(/(^(i|l)('|’|`|′)?m|^(i|l) am) .+/.test(message.content.toLowerCase()) && message.content.length < 25) {
        const value: number = Math.random();
        if(value < 0.85) {
            message.reply(`Hi,${message.content.substring(message.content.toLowerCase().indexOf('m')+1)}. I'm dad!`);
        } else {
            message.reply(`Hi,${message.content.substring(message.content.toLowerCase().indexOf('m')+1)}. I'm shy <a:imshy:788145616256892949>`);
        }
    }

    // WHO IS EPIC?
    if(/who is (awesome|epic|cool|legendary|boppin|smart|the best)\?/.test(message.content.toLowerCase())) {
        if(message.author.id !== "756757056941326397") {
            message.reply("https://media1.giphy.com/media/bQC7ZxmQ3LdLO/giphy.gif");
        }
    }

    // IS ... EPIC?
    if(/is [\w -]+ (awesome|epic|cool|legendary|boppin|smart|the best)\??/.test(message.content.toLowerCase())) {
        if(message.content.toLowerCase().indexOf("doom") !== -1) {
            message.reply("<:no:794106108247146516>");
        } else message.reply("Of course!");
    }
    
    // WHERE IS ...?
    if(/where is [\w -]+\??/.test(message.content.toLowerCase())) {
        message.reply("Drinking water, hopefully!");
    }

    // MEEP
    let mdrand = ["", "*", "**", "***", "__"];
    let meepvar = ["meep", "Meep", "MEEP"];
    // very dirty fix to increase `""` probability xxxD
    let punctuation = ["", "", "", "", "", "", ".", "!", "?", "!?"];
    if(/m(e+)p/.test(message.content.toLowerCase())) {
        let md = choose(mdrand);
        message.channel.send(md + choose(meepvar) + md + choose(punctuation));
    }

    // G'NIGHT!
    var gnight: string[] = [
        "goodnight everyone",
        "night night everyone",
        "see you all tomorrow",
        "good night everyone",
        "night night guys",
        "good night guys",
        "i slep now",
        "i slep",
        "night night",
        "good night",
        "i sleep",
        "i sleep now",
        "i'm heading to bed"
    ];
    if(gnight.indexOf(message.content.toLowerCase()) !== -1) {
        message.channel.send("https://tenor.com/view/cute-kitten-alone-sleep-tucked-in-gif-14814077");
    }

    // FACTS
    if(messageCount % 250 === 0) {
        const fact: Fact = choose(facts);
        const embed: MessageEmbed = new MessageEmbed().setTitle(fact.fact);
        if(fact.image) embed.setImage(fact.image);
        if(!fact.rarity) fact.rarity = 'Common';

        if(fact.rarity === 'Common') {
            embed.setColor("#add8e6");
        } else if(fact.rarity === 'Rare') {
            embed.setColor("#1919FF");
        } else if(fact.rarity === 'Epic') {
            embed.setColor("#660099");
        } else if(fact.rarity === 'Legendary') {
            embed.setColor("#990000");
        }
        embed.setFooter(`${fact.rarity} Fact #${facts.indexOf(fact)}`);

        (<TextChannel> message!.guild!.channels.cache.find(channel => channel.name === "general")).send("");
    }

    // SNOWIEE-POPUP
    if(messageCount % snow_chance === 0) {
        (<TextChannel> message!.guild!.channels.cache.find(channel => channel.name === "general"))
            .send('A Wild Snowiee wished you an epic day!').then(() => {
                (<TextChannel> message!.guild!.channels.cache.find(channel => channel.name === "general"))
                    .send('https://cdn.discordapp.com/attachments/760524902712344607/813888811451809872/84b80b16-1d16-4684-8202-9374fe2c3794.png');
            });
        snow_chance = Math.round(Math.random()*2500);
    }

    // DOOMER HENTAI
    // I really do no enjoy adding this! Keep that in mind! :POUT:
    if(message.content.toLowerCase().indexOf("doom") !== -1 && message.content.toLowerCase().indexOf("hentai") !== -1)
        message.reply("<a:cutepout:789227728334487582>");

    // SLEEP POLICE
    if(message.content.toLowerCase().indexOf("go to sleep") !== -1 || 
        message.content.toLowerCase().indexOf("get some sleep") !== -1 ||
        message.content.toLowerCase().indexOf("why are you awake") !== -1 ||
        message.content.toLowerCase().indexOf("you should sleep") !== -1) {
        message.channel.send("Sleep Police comin' in hot!");
    }

    // PROMISE INNOCENCE 
    if(message.author.id === "516282651469021185" && message.content.toLowerCase().indexOf("nani") !== -1) {
        message.reply("You're so innocent, it's adorable <:smile:794329003216338984>");
    }

    // BOT INTRO
    if(message.mentions !== undefined && message.mentions!.users!.first() !== undefined && 
        message.mentions!.users!.first()!.id === "783261265035395123" &&
        (message.content.indexOf("introduc") !== -1 || message.content.indexOf("hi") !== -1)) {
        message.channel.send("Heyyo! I'm <@756757056941326397>'s Bot ^^! Hope you have a nice stay <3!");
    }
    
    // ANTI-MUDAE [REMOVED]
    // NO SWEARING [REMOVED]
}
