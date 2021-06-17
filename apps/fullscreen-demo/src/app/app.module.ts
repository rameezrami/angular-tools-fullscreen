
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FullscreenModule } from '@angular-tools/fullscreen'


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FullscreenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
