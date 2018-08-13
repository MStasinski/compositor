/*

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SetsModule} from './sets/sets.module';
import {ComposerModule} from './composer/composer.module';
import {PrintingModule} from './printing/printing.module';
import {NgDragDropModule} from 'ng-drag-drop';
import {HttpClientModule} from '@angular/common/http';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {CourseService} from './course.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    SetsModule,
    ComposerModule,
    PrintingModule,
    NgDragDropModule.forRoot()
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:4000/graphiql'}),
      cache: new InMemoryCache()
    });
  }
}
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

import { CourseService } from './course.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {ComposerModule} from './composer/composer.module';
import {SetsModule} from './sets/sets.module';
import {PrintingModule} from './printing/printing.module';
import {NgDragDropModule} from 'ng-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    SetsModule,
    ComposerModule,
    PrintingModule,
    NgDragDropModule.forRoot()
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:4000/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
