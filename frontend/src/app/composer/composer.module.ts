import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComposingComponent} from './composing/composing.component';
import {RouterModule} from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {SharedModule} from '../shared/shared.module';
import {NgxSmoothDnDModule} from 'ngx-smooth-dnd';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    NgxDnDModule,
    SharedModule,
    NgxSmoothDnDModule
  ],
  declarations: [ComposingComponent]
})
export class ComposerModule {
}
