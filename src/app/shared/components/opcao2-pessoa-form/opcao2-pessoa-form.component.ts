import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-opcao2-pessoa-form',
  templateUrl: './opcao2-pessoa-form.component.html',
  styleUrls: ['./opcao2-pessoa-form.component.scss']
})
export class Opcao2PessoaFormComponent implements OnInit {
  
  form!: FormGroup; 

  /* 
    Ao Injetar o ControlContainer em um form filho ( que é esse o caso ), ele vai pegar o FormGroup do componente pai ( o componente que está chamando esse componente 
    filho app-opcao2-pessoa-form que no caso se chama fornecedor.component ) e lá na classe pai ele vai pegar a instancia do FormGroup
  */
  // Artigo mt bom sobre o ControlContainer: https://desenvolvimento.shift.com.br/dividindo-formul%C3%A1rios-complexos-no-angular-com-controlcontainer-1b107d59c8be
  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    // Como o form Group do componente pai possui os mesmos FormControls do html, o form pai vai funcionar corretamente.
    this.form = this.controlContainer.control as FormGroup;

    console.log(this.controlContainer.control);
  }

}
