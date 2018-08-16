import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Course, Question} from '../../services/types';

import {QuestionService} from '../../services/question.service';


@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit, OnChanges {


  @Input()
  questions: Observable<Question[]>;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.questions = this.questionService.questionBySectionAndTheme('0', '1');
  }

  ngOnChanges() {
    this.questions = this.questionService.questionBySectionAndTheme('0', '1');
  }
}
