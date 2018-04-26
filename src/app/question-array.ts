import { QuestionBase } from './question-base';

export class ArrayQuestion extends QuestionBase<string> {
    controlType = 'array';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
