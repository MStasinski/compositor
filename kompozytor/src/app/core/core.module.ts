import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderNavigationComponent} from './header-navigation/header-navigation.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderNavigationComponent],
  declarations: [HeaderNavigationComponent]
})
export class CoreModule {
}
