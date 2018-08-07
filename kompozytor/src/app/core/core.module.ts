import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderNavigationComponent} from './header-navigation/header-navigation.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {NavButtonComponent} from '../shared/nav-button/nav-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [HeaderNavigationComponent],
  declarations: [
    HeaderNavigationComponent,
    NavButtonComponent]
})
export class CoreModule {
}
