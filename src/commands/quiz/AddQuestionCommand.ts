import { quiz, Question } from '../../interfaces/Document';
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '../../client/ClientCache';

export const run: RunFunction = async(client, message) => {
    var tokens: string[] = message.content.substring(prefix.length).split(/;+/g);
    var pretokens: string[] = tokens[0].split(/ +/g, 3);
    if(tokens.length < 5) {
        message.channel.send("Syntax is: `addquestion [quiz-id] [question-with-spaces]?; [correct answer]; [wrong answer 1]; [wrong answer 2]; ...;`");
    } else if(tokens.length >= 5) {
        var question: Question = new Question();
        question.question = tokens[0].substring(tokens[0].indexOf(pretokens[2]));
        question.correct = tokens[1];
        question.wrong = [];
        for(let i = 2; i < tokens.length; i++) {
            question.wrong.push(tokens[i]);
        }

        const filter = { identifier: Number.parseInt(pretokens[1]) };

        let doc = await quiz.findOne({ filter });
        var questions: Question[] = doc?.questions || [];
        questions.push(question);

        const update = { questions: questions };
        doc = await quiz.findOneAndUpdate(filter, update, { new: true });

        if(questions.length === doc?.questions.length) {
            message.channel.send(`Successfully added question to Quiz! ${doc?.title}`);
        }
    }
}

export const name: string = 'addquestion';
