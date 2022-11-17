import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { Opcao1PessoaFormModule } from 'src/app/shared/components/opcao1-pessoa-form/opcao1-pessoa-form.module';
import { Opcao2PessoaFormModule } from 'src/app/shared/components/opcao2-pessoa-form/opcao2-pessoa-form.module';
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
  ],
})
export class FornecedorModule {}
