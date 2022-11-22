import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Opcao3PessoaFormComponent } from './opcao3-pessoa-form.component';



@NgModule({
  declarations: [
    Opcao3PessoaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    Opcao3PessoaFormComponent
  ]
})
export class Opcao3PessoaFormModule { }
