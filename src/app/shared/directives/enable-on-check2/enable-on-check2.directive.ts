import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormControl, NgControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appEnableOnCheck2]',
})
export class EnableOnCheck2Directive implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  @Input('appEnableOnCheck2') checkBoxControlName?: string;

  /**
   * Única coisa que mudou do appEnableOnCheck1 para o appEnableOnCheck2 é que o 1 pega o formControl
   * colocando um input com o mesmo nome do formControlName @Input('formControlName') xpto,
   * porem esse appEnableOnCheck2 eu pego a instancia do formControlName pelo NgControl via injeção
   * de dependencia oq torna mais limpo o código
   */
  constructor(
    private controlContainer: ControlContainer,
    private ngControl: NgControl
  ) {}

  ngOnInit(): void {
    if (this.checkBoxControlName) {
      const checkBoxForm = this.getControl(this.checkBoxControlName);

      if (!checkBoxForm.value) {
        this.ngControl.control?.disable();
        this.ngControl.control?.reset();
      }

      checkBoxForm.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe((checked: Boolean) => {
          if (checked) {
            this.ngControl.control?.enable();
          } else {
            this.ngControl.control?.disable();
            this.ngControl.control?.reset();
          }
        });
    }
  }

  getControl(controlName: string): FormControl {
    return this.controlContainer.control?.get(controlName) as FormControl;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
