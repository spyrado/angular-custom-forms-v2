import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnableOnCheckDirective } from './enable-on-check.directive';



@NgModule({
  declarations: [
    EnableOnCheckDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnableOnCheckDirective
  ]
})
export class EnableOnCheckModule { }
