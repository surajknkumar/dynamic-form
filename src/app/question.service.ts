import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { TextQuestion } from './question-text';
import { ArrayQuestion } from './question-array';
@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new ArrayQuestion({
        key: 'array',
        label: 'Array',
        required: true,
        array:['',''],
        order: 1
      }),

      new TextQuestion({
        key: 'emailAddress',
        label: '2',
        type: 'email',
        order: 2
      }),
      new TextQuestion({
        key: 'emailAddress',
        label: '5',
        type: 'email',
        order: 5
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: '4',
        type: 'email',
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
