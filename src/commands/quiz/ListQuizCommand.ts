import { quiz } from '../../interfaces/Document';
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '../../client/ClientCache';
import { Collection, Message, MessageReaction, User } from 'discord.js';

const filter = (reaction: MessageReaction, user: User) => { 
    return (reaction.emoji.name === "👈" || reaction.emoji.name === "👉") && user.id !== '783261265035395123'
}

async function handle(collected: Collection<string, MessageReaction>, msg: Message, quizID: number): Promise<void> {
    const reaction = collected.first();
    const qID: number = quizID;
    if(reaction?.emoji.name === '👈') {
        if(quizID > 0) quizID--;
    } else if(reaction?.emoji.name === '👉') {
        let x = await quiz.findOne({ identifier: quizID+1 });
        if(x !== null) quizID++;
    }
    
    if(qID == quizID) return;

    let doc = await quiz.findOne({ identifier: quizID });
    msg.edit('', {
        embed: {
            thumbnail: {
                url: doc?.cover
            },
            footer: {
                text: doc?.title
            }
        }
    });
    msg.reactions.removeAll();
    msg.react("👈");
    msg.react("👉");
    msg.awaitReactions(filter, { max: 1, time: 15000 }).then(collected => handle(collected, msg, quizID));
}

export const run: RunFunction = async(client, message) => {
    var tokens: string[] = message.content.substring(prefix.length).split(/ +/g);
    if(tokens.length > 2) {
        message.channel.send("Syntax is: `listquiz [id?]`");
    } else if(tokens.length == 1) {
        let quizID = 0;
        let doc = await quiz.findOne({ identifier: quizID });

        message.channel.send('', {
            embed: {
                thumbnail: {
                    url: doc?.cover
                },
                footer: {
                    text: doc?.title
                }
            }
        }).then(msg => {
            msg.react("👈");
            msg.react("👉");

            msg.awaitReactions(filter, { max: 1, time: 15000 }).then(collected => handle(collected, msg, quizID));
        });

    } else if(tokens.length === 2) {
        let quizID = Number.parseInt(tokens[1]);
        if(quizID !== NaN) {
            let doc = await quiz.findOne({ identifier: quizID });
            if(doc !== null) {
                let msg = "\n";
                for(let i = 0; i < doc!.questions.length; i++) {
                    msg += ((i+1) + ") " + doc!.questions[i].question + "\n");
                }
                message.reply(msg);
            } else {
                message.reply("No such quiz found!");
            }
        }
    } else if(tokens.length > 2){
        message.channel.send("Too many arguments!");
    }
}

export const name: string = 'listquiz';
export const description: string = 'Lists either all quizes or the questions for a specific one!';