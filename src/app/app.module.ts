import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {MainModule} from "./main/main.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'movies'}
]

@NgModule({
  declarations: [
    AppComponent,

  ],
    imports: [
        BrowserModule,
        AuthModule,
        MainModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
  exports: [RouterModule],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
