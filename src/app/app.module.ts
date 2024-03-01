import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
];

@NgModule({
  // imports: [...modules],
  // exports: [...modules],
})
export class AppModule {}