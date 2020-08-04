import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxCSVtoJSONModule} from 'ngx-csvto-json';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCSVtoJSONModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
