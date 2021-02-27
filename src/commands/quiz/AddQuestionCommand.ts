import { quiz, Question } from '../../interfaces/Document';
import { RunFunction } from '../../interfaces/Command';
import { prefix } from '../../client/ClientCache';

export const run: RunFunction = async(client, message) => {
    // Failsafe!
    if(message.content.endsWith(";")) message.content.substring(0, message.content.length-1);

    var tokens: string[] = message.content.substring(prefix.length).split(/;+/g);
    var pretokens: string[] = tokens[0].split(/ +/g, 3);
    if(tokens.length < 3) {
        message.channel.send("Syntax is: `addquestion [quiz-id] [question-with-spaces]?; [correct answer]; [wrong answer 1]; [wrong answer 2]; ...`");
    } else if(tokens.length >= 3) {
        var question: Question = new Question();
        question.question = tokens[0].substring(tokens[0].indexOf(pretokens[2]));
        question.correct = tokens[1];
        question.wrong = [];
        for(let i = 2; i < tokens.length; i++) {
            question.wrong.push(tokens[i]);
        }

        const quizID = Number.parseInt(pretokens[1]);

        let doc = await quiz.findOne({ identifier: quizID });
        // Changed to `Assert non-null!`
        var questions: Question[] = doc!.questions!;
        questions.push(question);

        const update = { questions: questions };
        doc = await quiz.findOneAndUpdate({ identifier: quizID }, update, { new: true });

        if(questions.length === doc?.questions.length) {
            message.channel.send(`Successfully added question to Quiz! ${doc?.title}`);
        }
    }
}

export const name: string = 'addquestion';
export const description: string = 'Adds a question to a quiz! Avoid Spaces inbetween `;`. The last answer should __not__ have a `\'` at the end!';
