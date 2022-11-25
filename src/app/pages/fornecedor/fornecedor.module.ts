import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { Opcao1PessoaFormModule } from 'src/app/shared/components/opcao1-pessoa-form/opcao1-pessoa-form.module';
import { Opcao2PessoaFormModule } from 'src/app/shared/components/opcao2-pessoa-form/opcao2-pessoa-form.module';
import { Opcao3PessoaFormModule } from 'src/app/shared/components/opcao3-pessoa-form/opcao3-pessoa-form.module';
import { Opcao4PessoaFormModule } from 'src/app/shared/components/opcao4-pessoa-form/opcao4-pessoa-form.module';
import { EnableOnCheck1Module } from 'src/app/shared/directives/enable-on-check1/enable-on-check1.module';
import { EnableOnCheck2Module } from 'src/app/shared/directives/enable-on-check2/enable-on-check2.module';
import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorComponent } from './fornecedor.component';

@NgModule({
  declarations: [FornecedorComponent],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    ReactiveFormsModule,
    Opcao1PessoaFormModule,
    Opcao2PessoaFormModule,
    Opcao3PessoaFormModule,
    Opcao4PessoaFormModule,
    EnableOnCheck1Module,
    EnableOnCheck2Module,
  ],
})
export class FornecedorModule {}
