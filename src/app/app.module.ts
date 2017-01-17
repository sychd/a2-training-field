import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MultiproviderModule} from "app/multiproviders/MultiproviderModule";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiproviderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
