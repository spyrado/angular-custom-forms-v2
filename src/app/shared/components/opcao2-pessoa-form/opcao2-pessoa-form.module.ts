import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Opcao2PessoaFormComponent } from './opcao2-pessoa-form.component';



@NgModule({
  declarations: [
    Opcao2PessoaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    Opcao2PessoaFormComponent
  ]
})
export class Opcao2PessoaFormModule { }
