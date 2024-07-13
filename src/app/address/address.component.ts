import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressComponent,
    },
  ],
})
export class AddressComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup = this.fb.group({
    district: ['', [Validators.required]],
    thana: ['', [Validators.required]],
    postCode: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(5),
      ],
    ],
    address: ['', [Validators.required]],
  });

  onChange!: Subscription;
  onTouched = () => {};

  constructor(private fb: FormBuilder) {}

  writeValue(value: any): void {
    if (value) {
      console.log(value);
      this.form.setValue(value);
    }
  }
  registerOnChange(onChange: any): void {
    this.onChange = this.form.valueChanges.subscribe(onChange);
  }
  ngOnDestroy(): void {
    this.onChange.unsubscribe();
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disabled;
    } else {
      this.form.enabled;
    }
  }

  get postCode() {
    return this.form.get('postCode');
  }
}
