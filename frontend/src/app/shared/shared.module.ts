import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavButtonComponent} from './nav-button/nav-button.component';
import {MatTabsModule} from '@angular/material';
import {QuestionsCounterComponent} from './questions-counter/questions-counter.component';
import {PagesCounterComponent} from './pages-counter/pages-counter.component';
import {SwitchButtonComponent} from './switch-button/switch-button.component';
import { SwitchButtonDirective } from './switch-button.directive';
import { QuestionComponent } from './question/question.component';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    NavButtonComponent,
    MatTabsModule,
    QuestionsCounterComponent,
    PagesCounterComponent,
    SwitchButtonComponent,
    SwitchButtonDirective
  ],
  declarations: [
    NavButtonComponent,
    QuestionsCounterComponent,
    PagesCounterComponent,
    SwitchButtonComponent,
    SwitchButtonDirective,
    QuestionComponent,
  ],
})
export class SharedModule {
}
