import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Opcao4PessoaFormComponent } from './opcao4-pessoa-form.component';

@NgModule({
  declarations: [Opcao4PessoaFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [Opcao4PessoaFormComponent],
})
export class Opcao4PessoaFormModule {}
