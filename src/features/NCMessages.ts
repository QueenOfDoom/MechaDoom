// Non-Command Messages 
// [https://cloud.spennorex.net/index.php/s/ZtdsxD2ngpqkmmi]  
// [https://trello.com/b/qp8OA4F8/server-projects]

import { Message, TextChannel } from "discord.js";

let messageCount = 0;
let mudaeToGeneral = 0;
let snow_chance = Math.round(Math.random()*2500);

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
        "If you need help with math homework, ping Doomer 3 times: for notice, for good measure, and for love.",
        "There is a giant in our midst that is constantly on the lookout for girls with short black hair. You have been warned.",
        "My hydration reminders are actually inspired by the original water man in this server. <:ShiroHeart:788455444452605983>",
        "There's at least one person here who said they'd play the piano for us, and we're still waiting for it to happen." +
        "https://tenor.com/view/kittycass-peachcat-cute-wiggle-patiently-gif-16485846",
        "Audrey may be cashless but she's full of talent! Dig up <#788317717328298025> to see photos of her doodle, embroidery, quilling, and cooking! Also, she plays the saxophone. <:NadeYay:789210666833150023>!",
        "We've got members here I've never met, as they're exclusively in Mudae channels where I'm banned. <:sadCat:788627176374796302>",
        "At least one person here prefers yaoi over yuri... For the sake of universal peace, don't let snowiee know who they are." +
        "https://tenor.com/view/secret-boss-baby-on-the-phone-gif-7991222",
        "Maybe someday some of our YouTubers here will share their channel. Until then, let's all support their passion silently in our hearts, whoever these mysterious members are." +
        "https://tenor.com/view/get-that-bread-go-for-gif-18646298",
        "If you want to know how to make croissant taco rings, or what they are, ask ~~mom~~ dad. <:doggoHehe:788627313231003689>!",
        "Did you know? Years before becoming the Dance King, he was the lead for a highschool musical." +
        "https://tenor.com/view/zac-efron-fabulous-sass-sassy-strut-gif-4622511",
        "There is a troll who'll play you the coconut song if you fall asleep at the auditorium. <:doggoHehe:788627313231003689>" +
        "https://tenor.com/view/kakamora-gif-9714137",
        "Want to talk about SCPs? Our resident SCP SlimeLovesYou is probably busy studying human life right now, but they'd love to tell you all about it... someday." +
        "https://tenor.com/view/someday-not-tomorrow-not-today-maybe-maybe-not-today-gif-13346626",
        "If promise has her closet to hide in for karaoke, a resident fruit hides in the bathroom (to the dismay of her father)." +
        "https://tenor.com/view/knock-knocking-on-the-door-open-the-door-detective-vic-dave-bautista-gif-13995780",
        "Once upon a January karaoke session, Niphy thought she could get away with not singing by doing her laundry in between... In the end she sang Lucky (Jason Mraz) in acapella. <:umu:789227387278983188>",
        "Kami's voice sounds similar to that of Morgan Freeman's. *Make of that what you will.* <:doggoHehe:788627313231003689>",
        "Someone here loves curry so much that they named themselves after its leaves. :curry:",
        "We have a commuting Martian in our midst. https://tenor.com/view/executivo-cat-ride-mars-gif-16618606"
    ];
    if(messageCount % 250 === 0) {
        (<TextChannel> message!.guild!.channels.cache.find(channel => channel.name === "general")).send(choose(facts));
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
