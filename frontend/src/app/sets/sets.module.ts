import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SetListComponent} from './set-list/set-list.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    CdkTableModule,
    SharedModule
  ],
  declarations: [SetListComponent]
})
export class SetsModule {
}
