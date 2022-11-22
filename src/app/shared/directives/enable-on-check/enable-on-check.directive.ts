import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appEnableOnCheck]',
})
export class EnableOnCheckDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  @Input() checkBoxControlName?: string;
  @Input('formControlName') controlName!: string;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.checkBoxControlName) {
      const checkBoxForm = this.getControl(this.checkBoxControlName);
      checkBoxForm.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe((checked: Boolean) => {
          const controlForm = this.getControl(this.controlName);
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
