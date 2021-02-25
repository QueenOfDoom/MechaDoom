import { getModelForClass, modelOptions, prop, Severity } from '@typegoose/typegoose';

/* CONFIG */
class Config {
    @prop({ required: true })
    public prefix!: string;

    @prop({ required: true })
    public start!: number;
}
const config = getModelForClass(Config);

/* QUIZ */
class Question {
    @prop({ required: true })
    public question!: string;

    @prop({ required: true })
    public correct!: string;

    @prop({ required: true })
    public wrong!: string[];
}

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Quiz {
    @prop({ required: true })
    public identifier!: number;

    @prop({ required: true })
    public title!: string;

    @prop({ required: true })
    public cover!: string;

    @prop()
    public questions!: Question[];
}
const quiz = getModelForClass(Quiz);

export { config, quiz };