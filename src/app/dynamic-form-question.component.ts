import { Component, Input,OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from './question-base';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit{
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  ngOnInit() {
    console.log("++++++++++++++++++++++++++++++++++",this.question, this.form);
  }
  private aaa: any =[];
  get isValid() {
  //  console.log("form", this.question, this.question.key);
    if (this.question.array!=undefined) {
      return this.form.controls['array'].valid;
      
    } else {
      return this.form.controls[this.question.key].valid;
      
    }
  }
}
