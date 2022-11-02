import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";

import { PostApiComponent } from './post-api/post-api.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PutApiComponent } from './put-api/put-api.component';
import { LearnComponent } from './learn/learn.component';

@NgModule({
  declarations: [

    AppComponent,
     PostApiComponent,
     HomeComponent,
     PutApiComponent,
     LearnComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
