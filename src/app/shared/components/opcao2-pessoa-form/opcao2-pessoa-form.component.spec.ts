import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcao2PessoaFormComponent } from './opcao2-pessoa-form.component';

describe('Opcao2PessoaFormComponent', () => {
  let component: Opcao2PessoaFormComponent;
  let fixture: ComponentFixture<Opcao2PessoaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opcao2PessoaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Opcao2PessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
