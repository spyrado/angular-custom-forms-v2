import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcao3PessoaFormComponent } from './opcao3-pessoa-form.component';

describe('Opcao3PessoaFormComponent', () => {
  let component: Opcao3PessoaFormComponent;
  let fixture: ComponentFixture<Opcao3PessoaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opcao3PessoaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Opcao3PessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
