import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit, OnDestroy {

  form: FormGroup = this.buildForm();
  private destroy$ = new Subject();

  constructor(private formBuilder: FormBuilder) { }

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

  private listenForHasCnhControlChange() {
    this.form.get('hasCnh')
      ?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(checked => {
        const cnhForm = this.form.get('cnh');
        if(checked) {
          cnhForm?.enable();
        } else {
          cnhForm?.disable();
          cnhForm?.reset();
        }
      })
  }

  ngOnInit(): void {
    this.listenForHasCnhControlChange();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

}
