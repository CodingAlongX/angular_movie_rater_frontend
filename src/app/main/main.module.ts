import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {path: 'movies', component: MainComponent}
]


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainModule {
}
