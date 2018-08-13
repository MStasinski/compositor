import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SetListComponent} from "./set-list/set-list.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [SetListComponent]
})
export class SetsModule { }
