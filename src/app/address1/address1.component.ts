import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-address1',
  templateUrl: './address1.component.html',
  styleUrl: './address1.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class Address1Component implements OnInit {
  @Input() addressType = '';
  @Input() parentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm?.addControl(
      this.addressType,
      this.fb.group({
        district: ['', [Validators.required]],
        thana: ['', [Validators.required]],
        postCode: ['', [Validators.required]],
        address: ['', [Validators.required]],
      }),
    );
  }

  getFormGroup(): FormGroup {
    return this.parentForm.get(this.addressType) as FormGroup;
  }

  get district() {
    return this.getFormGroup().get('district');
  }
  get thana() {
    return this.getFormGroup().get('thana');
  }
  get postCode() {
    return this.getFormGroup().get('postCode');
  }
  get address() {
    return this.getFormGroup().get('address');
  }
}
