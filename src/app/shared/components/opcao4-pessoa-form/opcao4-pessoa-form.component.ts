import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-opcao4-pessoa-form',
  templateUrl: './opcao4-pessoa-form.component.html',
  styleUrls: ['./opcao4-pessoa-form.component.scss'],
})
export class Opcao4PessoaFormComponent implements OnInit {
  form = this.buildForm();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      lastName: [''],
      birthDate: [''],
    });
  }

  getForm(): FormGroup {
    return this.form;
  }
}
