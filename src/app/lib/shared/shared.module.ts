import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  // imports: [...modules],
  // exports: [...modules],
})
export class SharedModule { }
