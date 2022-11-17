import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-opcao1-pessoa-form',
  templateUrl: './opcao1-pessoa-form.component.html',
  styleUrls: ['./opcao1-pessoa-form.component.scss']
})
export class Opcao1PessoaFormComponent implements OnInit {

  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
