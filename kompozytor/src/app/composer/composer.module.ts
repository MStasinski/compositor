import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComposingComponent} from './composing/composing.component';
import {RouterModule} from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    NgxDnDModule,
    SharedModule,
  ],
  declarations: [ComposingComponent]
})
export class ComposerModule {
}
