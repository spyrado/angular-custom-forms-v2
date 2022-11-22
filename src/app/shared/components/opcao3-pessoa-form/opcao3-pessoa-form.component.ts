import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-opcao3-pessoa-form',
  templateUrl: './opcao3-pessoa-form.component.html',
  styleUrls: ['./opcao3-pessoa-form.component.scss'],
  // Aqui eu estou falando, prover o ControlContainer, porem use a Diretiva no lugar dele, ou seja, obtenha controle do formulário porem só do FormGroup
  // e ai você não precisa passar <div [formGroup]="form"> pode deixar em branco que ele já detecta
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class Opcao3PessoaFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
