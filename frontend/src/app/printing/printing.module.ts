import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrintViewComponent} from './print-view/print-view.component';
import {TestComponent } from './test/test.component';
import {ItemComponent} from '../item/item.component';
import {ListComponent} from '../list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrintViewComponent,
    ItemComponent,
    ListComponent,
    TestComponent]
})
export class PrintingModule {
}
