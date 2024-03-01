import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule { }
