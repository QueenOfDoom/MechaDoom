// Non-Command Messages 
// [https://cloud.spennorex.net/index.php/s/ZtdsxD2ngpqkmmi]  
// [https://trello.com/b/qp8OA4F8/server-projects]

import { Message, TextChannel } from "discord.js";

let messageCount = 0;
let mudaeToGeneral = 0;
let snow_chance = Math.round(Math.random()*10000);

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
    let punctuation = ["", ".", "!", "?", "!?"];
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
    var facts: string[] = [
        "Once upon a time Zoe was a full-time lurker, until she sang in an impromptu karaoke... Zoe has been active since. <a:beardancecute:813806680688427028>",
        "Before Kazu got buried with school work we had *late night talkshows with Kazu*.",
        "Promise once sang for 5 hours in her closet. <:YuriPeek:789227326730010644>",
        "Someone here is a cyborg in the making.",
        "Someone here is in the making of a cyborg",
        "Underneath those swears and curses, snowiee is an adorable potato who loves hugs.",
        "My maker is a simp who refuses to be simped. <:HinaPensiveSip:793239405459537920>",
        "Someone here once had a space cookie too many just before Christmas.",
        "Once upon a time, someone here thought they could go to a zoo far up in the mountains at 3am. *Yes, alcohol was involved.*",
        "Try to spy with your little eye the pokemon once crowned **King of Dance**.",
        "At least two people here have a tattoo. One has a boat, and another has a compass.",
        "A bunch of us here are irl friends and an irl couple, way before this server existed. :heart:",
        "Lee is an underrated budding ukelele star. <:correct:704250174800789514>",
        "Most if not everyone here loves puns, but someone is trying to keep their love for it a secret. Go figure. <:VampySmug:789227387245166632> ",
        "If you need help with math homework, ping doomer 3 times: for notice, for good measure, and for love.",
        "There is a giant in our midst that is constantly on the lookout for girls with short black hair. You have been warned."
    ];
    if(messageCount % 10000 === 0) {
        (<TextChannel> message!.guild!.channels.cache.find(channel => channel.name === "general")).send(choose(facts));
    }

    // SNOWIEE-POPUP
    if(messageCount % snow_chance === 0) {
        (<TextChannel> message!.guild!.channels.cache.find(channel => channel.name === "general"))
            .send('A Wild Snowiee wished you an epic day!').then(() => {
                (<TextChannel> message!.guild!.channels.cache.find(channel => channel.name === "general"))
                    .send('https://cdn.discordapp.com/attachments/760524902712344607/813888811451809872/84b80b16-1d16-4684-8202-9374fe2c3794.png');
            });
        snow_chance = Math.round(Math.random()*10000);
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
    
    // ANTI-MUDAE [REMOVED]
    // NO SWEARING [REMOVED]
}