import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DownlaodComponent } from './downlaod/downlaod.component';
import { TableComponent } from './table/table.component';
import { Router } from './app.routing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Importing font-awesome for icons
import { AngularFontAwesomeModule } from "angular-font-awesome";

//Explicitly written Bootstrap Module
import { AppBootstrapModule } from "./app.bootstrap.module";
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    DownlaodComponent,
    TableComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    Router,
    AngularFontAwesomeModule
  ],
  providers: [
    {provide:LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
