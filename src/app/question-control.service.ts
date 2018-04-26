import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
    let arrayGroup: any = [];
    questions.forEach(question => {
      if (question.array != undefined) {
        question['array'].forEach(element => {
        //  console.log(question, element);         
          arrayGroup.push(question.required ? new FormControl(question.value || '', Validators.required)
            : new FormControl(question.value || ''));   
        });
        group['array'] = new FormArray(arrayGroup);
      } else {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
        }

      });
    
   // console.log("group",group,arrayGroup);
    return new FormGroup(group);
  }
}
