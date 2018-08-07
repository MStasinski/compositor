import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComposingComponent} from "./composing/composing.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ComposingComponent]
})
export class ComposerModule {
}
