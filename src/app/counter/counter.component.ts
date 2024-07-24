import { CommonModule } from '@angular/common';
import { Component, OnInit, computed } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Address1Component } from '../address1/address1.component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    Address1Component,
  ],
})
export class CounterComponent implements OnInit {
  constructor(
    public counterService: CounterService,
    private fb: FormBuilder,
  ) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nid: ['', [Validators.required]],
      passport: [''],
      isNRB: ['false'],
    });

    this.form.get('isNRB')?.valueChanges.subscribe((isNRB) => {
      if (isNRB == 'true') {
        this.passport?.setValidators(Validators.required);
        this.nid?.clearValidators();
        console.log('isNRB', isNRB);
        this.nid?.reset();
      } else {
        this.nid?.setValidators(Validators.required);
        this.passport?.clearValidators();
        this.passport?.reset();
        console.log('isNRB', isNRB);
      }
      this.form.get('passport')?.updateValueAndValidity();
      this.form.get('nid')?.updateValueAndValidity();
    });
  }

  get name() {
    return this.form.get('name');
  }

  get phone() {
    return this.form.get('phone');
  }
  get email() {
    return this.form.get('email');
  }

  get nid() {
    return this.form.get('nid');
  }
  get passport() {
    return this.form.get('passport');
  }

  submit() {
    this.form.markAllAsTouched();
    console.log(this.form.value);
    console.log(this.form.value.isNRB == 'false');
  }

  counter = this.counterService.counter();

  multiplier: number = 0;

  drivedCounter = computed(() => {
    const counter = this.counter();
    if (this.multiplier >= 10) {
      return counter * 10;
    } else {
      return 0;
    }
  });

  increment() {
    this.counterService.increment();
  }

  incrementMultiplier() {
    this.multiplier++;
  }
}
