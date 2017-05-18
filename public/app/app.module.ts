import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }