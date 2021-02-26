import { quiz } from '../../interfaces/Document';
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '../../client/ClientCache';

export const run: RunFunction = async(client, message) => {
    var tokens: string[] = message.content.substring(prefix.length).split(/ +/g);
    if(tokens.length < 3) {
        message.channel.send("Syntax is: `addquiz [topic-no-space] [cover-image-link]`");
    } else if(tokens.length == 3) {
        var identifier: number = 0;
        const max = await quiz.aggregate( [ { $sort : { identifier : -1 } } ] )
        if(max.length !== 0) identifier = max[0].identifier + 1;
        await quiz.create( {
            identifier: identifier,
            title: tokens[1],
            cover: tokens[2],
            questions: []
        }
        ).then((doc) => {
            message.channel.send(`Successfully created Quiz "${tokens[1]}" (ID: ${identifier})!`);
        });
    } else {
        message.channel.send("Too many arguments!");
    }
}

export const name: string = 'addquiz';
export const description: string = "Adds a Quiz to the Collection of Quizzes!";