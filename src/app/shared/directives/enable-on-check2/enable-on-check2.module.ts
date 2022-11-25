import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnableOnCheck2Directive } from './enable-on-check2.directive';

@NgModule({
  declarations: [EnableOnCheck2Directive],
  imports: [CommonModule],
  exports: [EnableOnCheck2Directive],
})
export class EnableOnCheck2Module {}
