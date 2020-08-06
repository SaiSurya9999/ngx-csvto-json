import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxCSVtoJSONModule} from 'ngx-csvto-json';
import {  FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgconfSearchModule} from 'ngconf-search';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCSVtoJSONModule,
    NgconfSearchModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
