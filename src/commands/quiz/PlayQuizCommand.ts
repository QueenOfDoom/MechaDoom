import { quiz } from '../../interfaces/Document';
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '../../client/ClientCache';

export const run: RunFunction = async(client, message) => {
    var tokens: string[] = message.content.substring(prefix.length).split(/ +/g);
    if(tokens.length > 2) {
        message.channel.send("Syntax is: `playquiz [id]`");
    } else if(tokens.length === 2) {
        let quizID = Number.parseInt(tokens[1]);
        if(quizID !== NaN) {
            let doc = await quiz.findOne({ identifier: quizID });
            if(doc !== null) {
                message.reply("I THINK I WAS CLEAR WHEN I SAID DON'T TOUCH THIS!");
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
