import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { Opcao1PessoaFormModule } from 'src/app/shared/components/opcao1-pessoa-form/opcao1-pessoa-form.module';
import { Opcao2PessoaFormModule } from 'src/app/shared/components/opcao2-pessoa-form/opcao2-pessoa-form.module';
import { Opcao3PessoaFormModule } from 'src/app/shared/components/opcao3-pessoa-form/opcao3-pessoa-form.module';
import { EnableOnCheckModule } from 'src/app/shared/directives/enable-on-check/enable-on-check.module';
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
    EnableOnCheckModule
  ],
})
export class FornecedorModule {}
