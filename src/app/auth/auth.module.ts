import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {Routes, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {path: 'auth', component: AuthComponent}
]


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class AuthModule {
}
