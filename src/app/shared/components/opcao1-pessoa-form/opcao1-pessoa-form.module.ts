import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Opcao1PessoaFormComponent } from './opcao1-pessoa-form.component';



@NgModule({
  declarations: [
    Opcao1PessoaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    Opcao1PessoaFormComponent
  ]
})
export class Opcao1PessoaFormModule { }
