import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {SetsModule} from "./sets/sets.module";
import {ComposerModule} from "./composer/composer.module";
import {PrintingModule} from "./printing/printing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SetsModule,
    ComposerModule,
    PrintingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
