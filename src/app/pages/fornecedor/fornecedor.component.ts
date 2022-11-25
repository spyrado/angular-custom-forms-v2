import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Opcao4PessoaFormComponent } from 'src/app/shared/components/opcao4-pessoa-form/opcao4-pessoa-form.component';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss'],
})
export class FornecedorComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  private destroy$ = new Subject<void>();

  /**
   * Devemos passar static true para o angular entender que eu preciso da
   * Instancia de Opcao4PessoaFormComponent ANTES de começar o lifecicle dele,
   * se eu passo static false ele só vai me dar a instancia quando rodar todos os lifecicles
   * e se eu utilizar esse form em um momento anterior a um afterViewInit da vida, eu vou
   * receber undefined
   *
   */

  @ViewChild(Opcao4PessoaFormComponent, { static: true })
  pessoaForm!: Opcao4PessoaFormComponent;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  // Versao para o opcao4-pessoa-form que é um form independente
  private buildForm(): FormGroup {
    return this.formBuilder.group({
      pessoa: this.pessoaForm.getForm(),
      rg: [''],
      hasCnh: [false],
      cnh: [''],
    });
  }

  // private buildForm(): FormGroup {
  //   return this.formBuilder.group({
  //     name: [{ value: '', disabled: true }],
  //     lastName: [''],
  //     birthDate: [''],
  //     rg: [''],
  //     hasCnh: [false],
  //     cnh: [''],
  //   });
  // }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
