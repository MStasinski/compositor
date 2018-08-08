import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComposingComponent} from "./composing/composing.component";
import {RouterModule} from "@angular/router";
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
  ],
  declarations: [ComposingComponent]
})
export class ComposerModule {
}
