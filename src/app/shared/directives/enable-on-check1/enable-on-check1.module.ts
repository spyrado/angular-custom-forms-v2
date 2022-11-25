import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnableOnCheck1Directive } from './enable-on-check1.directive';

@NgModule({
  declarations: [EnableOnCheck1Directive],
  imports: [CommonModule],
  exports: [EnableOnCheck1Directive],
})
export class EnableOnCheck1Module {}
