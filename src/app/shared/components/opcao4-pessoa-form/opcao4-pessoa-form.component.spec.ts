import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcao4PessoaFormComponent } from './opcao4-pessoa-form.component';

describe('Opcao3PessoaFormComponent', () => {
  let component: Opcao4PessoaFormComponent;
  let fixture: ComponentFixture<Opcao4PessoaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Opcao4PessoaFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Opcao4PessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
