import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MultiproviderModule} from "app/multiproviders/MultiproviderModule";
import {CommonModule} from "@angular/common";
import {InputChangeColorDirective} from "app/attribute-directive/InputChangeColorDirective";

@NgModule({
  declarations: [
    AppComponent,
    InputChangeColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiproviderModule,
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
