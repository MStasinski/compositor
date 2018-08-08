import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderNavigationComponent} from './header-navigation/header-navigation.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  exports: [HeaderNavigationComponent],
  declarations: [
    HeaderNavigationComponent]
})
export class CoreModule {
}
