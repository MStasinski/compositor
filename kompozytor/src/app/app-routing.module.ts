import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {SetListComponent} from "./sets/set-list/set-list.component";
import {ComposingComponent} from "./composer/composing/composing.component";
import {PrintViewComponent} from "./printing/print-view/print-view.component";


const APP_ROUTES: Route[] = [
  {path: '', component: SetListComponent},
  {path: 'setlist', component: SetListComponent},
  {path: 'composing', component: ComposingComponent},
  {path: 'printing', component: PrintViewComponent}
];

@NgModule({

  imports: [
    RouterModule.forRoot(APP_ROUTES, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
