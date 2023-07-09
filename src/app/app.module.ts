import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FetchUserComponent } from './fetch-user/fetch-user.component';
import {Routes} from "@angular/router";

const routes:Routes = [
  {path: '', component: FetchUserComponent},
  {path: '/create', component: CreateUserComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    FetchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
