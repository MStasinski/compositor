import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavButtonComponent} from './nav-button/nav-button.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [NavButtonComponent],
  declarations: [NavButtonComponent],
})
export class SharedModule {
}
