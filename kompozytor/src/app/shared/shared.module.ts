import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavButtonComponent} from './nav-button/nav-button.component';
import {MatTabsModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [NavButtonComponent, MatTabsModule],
  declarations: [NavButtonComponent],
})
export class SharedModule {
}
