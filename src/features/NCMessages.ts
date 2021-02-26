// Non-Command Messages

import { Message, TextChannel } from "discord.js";

let messageCount = 0;
let mudaeToGeneral = 0;

export function handleMessages(message: Message) {
    messageCount++;
    console.log("Message Received! (" + mudaeToGeneral + " / " + messageCount + ")");
    
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

    // MEEP
    if(/m(e+)p/.test(message.content.toLowerCase())) {
        message.channel.send("Meep.");
    }

    // NO SWEARING
    var anti_swear_users: string[] = ["225814327242915841", "322069361852416005", "329113620921450497"];
    if(anti_swear_users.indexOf(message.author.id) !== -1) {
        var inpolite: string[] = ["fuck", "shut up", "hoe", "ass", "hell", "damn", "darnit", "gdi", "wretch"];
        for(let i = 0; i < inpolite.length; i++) {
            if(message.content.toLowerCase().indexOf(inpolite[i]) !== -1) {
                message.reply("<:baka:789210166184640552>");
            }
        }
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
        "Once upon a time Zoe was a full-time lurker, until she sang in an impromptu karaoke... Zoe has been active since. <a:beardancecute~1:813806680688427028>",
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
        "A bunch of us here are irl friends and an irl couple, way before this server existed. <:heart:0483f2b648dcc986d01385062052ae1c>",
        "Lee is an underrated budding ukelele star. <:correct:704250174800789514>",
        "Most if not everyone here loves puns, but someone is trying to keep their love for it a secret. Go figure. <:VampySmug:789227387245166632> ",
        "If you need help with math homework, ping doomer 3 times: for notice, for good measure, and for love.",
        "There is a giant in our midst that is constantly on the lookout for girls with short black hair. You have been warned."
    ];
    if(messageCount % 100 === 0) {
        let ran = Math.round(Math.random()*facts.length);
        (<TextChannel> message!.guild!.channels.cache.find(channel => channel.name === "general")).send(facts[ran]);
    }
    
    // ANTI-MUDAE
    let mudaeChannels = [
        "787908833971273768",
        "787911987962576896",
        "809820231870578700",
        "809820279035396146"
    ];

    if(mudaeChannels.indexOf(message.channel.id) !== -1) {
            if(!message.content.startsWith("$") && message.author.id !== "432610292342587392") mudaeToGeneral++;
            if(mudaeToGeneral > 50) {
                for(let i = 0; i < mudaeChannels.length; i++) {
                    (<TextChannel> message!.guild!.channels.cache.find(channel => channel.id === mudaeChannels[i])).send("https://media.giphy.com/media/zCpYQh5YVhdI1rVYpE/giphy.gif");
                    (<TextChannel> message!.guild!.channels.cache.find(channel => channel.id === mudaeChannels[i])).send("Return to <#783535582965530624>, you've been warned <a:kek:789227894806937612>!");
                }
            }
    } else {
        mudaeToGeneral = 0;
    }
}