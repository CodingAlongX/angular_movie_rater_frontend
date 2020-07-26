import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {MainModule} from "./main/main.module";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'movies'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
