import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavButtonComponent} from './nav-button/nav-button.component';
import {MatTabsModule} from "@angular/material";
import {QuestionsCounterComponent} from "./questions-counter/questions-counter.component";
import { PagesCounterComponent } from './pages-counter/pages-counter.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';


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
  ],
  declarations: [
    NavButtonComponent,
    QuestionsCounterComponent,
    PagesCounterComponent,
    SwitchButtonComponent,
  ],
})
export class SharedModule {
}
