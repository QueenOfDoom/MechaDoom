import { Question, quiz } from '../../interfaces/Document';
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '../../client/ClientCache';
import { Message, MessageEmbed, MessageReaction, User } from 'discord.js';
import { Bot } from '@/client/Client';

let numreactions: string[] = [
    ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:"
];
let numreact: string[] = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];
let filter = (reaction: MessageReaction, user: User) => user.id !== "783261265035395123";
let points = 0;

async function displayQuestion(question: Question, message: Message, client: Bot) {
    let correct = question.correct;
    question.wrong.push(correct);
    let shuffled = question.wrong
        .map(val => ({sort: Math.random(), value: val}))
        .sort((a, b) => a.sort - b.sort)
        .map(val =>val.value);


    const embed: MessageEmbed = new MessageEmbed();
    embed.setTitle(question.question);
    for(let i = 0; i < shuffled.length; i++) {
        embed.addField(numreactions[i], shuffled[i], true);
    }

    await message.channel.send(embed).then(async msg => {
        for(let i = 0; i < shuffled.length; i++) {
            msg.react(numreact[i]);
        }

        await msg.awaitReactions(filter, { max: 1, time: 15000 }).then(collected => {
            const reaction = collected.first();
            if(numreact.indexOf(reaction?.emoji.name!) === shuffled.indexOf(correct)) {
                points++;
            }
        });
    });
}

export const run: RunFunction = async(client, message) => {
    if(message.author.id !== "756757056941326397") {
        message.reply("I THINK I WAS CLEAR WHEN I SAID DON'T TOUCH THIS! <a:tantrum:789253062798868520>"); 
        return;
    }

    var tokens: string[] = message.content.substring(prefix.length).split(/ +/g);
    if(tokens.length > 2) {
        message.channel.send("Syntax is: `playquiz [id]`");
    } else if(tokens.length === 2) {
        let quizID = Number.parseInt(tokens[1]);
        if(quizID !== NaN) {
            let doc = await quiz.findOne({ identifier: quizID });
            if(doc !== null) {
                let que = doc.questions;
                while(que.length > 0) {
                    var q = que.splice(Math.random()*que.length,1)[0];
                    await displayQuestion(q, message, client);
                }
                message.reply("You scored: " + points + "!");
            } else {
                message.reply("No such quiz found!");
            }
        }
    } else if(tokens.length > 2){
        message.channel.send("Too many arguments!");
    }
}

export const name: string = 'playquiz';
export const description: string = 'WORK IN PROGRESS! DO NOT TOUCH!';
