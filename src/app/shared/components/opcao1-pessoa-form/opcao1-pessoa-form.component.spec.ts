import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcao1PessoaFormComponent } from './opcao1-pessoa-form.component';

describe('Opcao1PessoaFormComponent', () => {
  let component: Opcao1PessoaFormComponent;
  let fixture: ComponentFixture<Opcao1PessoaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opcao1PessoaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Opcao1PessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
