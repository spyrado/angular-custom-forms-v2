import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss'],
})
export class FornecedorComponent implements OnInit, OnDestroy {
  form: FormGroup = this.buildForm();
  private destroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {}

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [{ value: '', disabled: true }],
      lastName: [''],
      birthDate: [''],
      rg: [''],
      hasCnh: [false],
      cnh: [''],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
