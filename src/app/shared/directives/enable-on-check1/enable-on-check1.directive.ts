import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appEnableOnCheck1]',
})
export class EnableOnCheck1Directive implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  @Input('appEnableOnCheck1') checkBoxControlName?: string;
  @Input('formControlName') inputControlName!: string;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.checkBoxControlName) {
      const checkBoxForm = this.getControl(this.checkBoxControlName);
      const controlForm = this.getControl(this.inputControlName);

      if (!checkBoxForm.value) {
        controlForm.disable();
        controlForm.reset();
      }

      checkBoxForm.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe((checked: Boolean) => {
          if (checked) {
            controlForm.enable();
          } else {
            controlForm.disable();
            controlForm.reset();
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
