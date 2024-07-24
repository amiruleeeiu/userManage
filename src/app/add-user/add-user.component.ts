import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { SnackbarService } from './../snackbar.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  
})
export class AddUserComponent implements OnInit, OnChanges {
  userForm!: FormGroup;
  editData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ref: MatDialogRef<AddUserComponent>,
    public fb: FormBuilder,
    public userService: UserService,
    private snackbarService: SnackbarService,
  ) {
    console.log('hello constructor');
  }

  ngOnChanges(changes: any): void {
    console.log('ng changes', changes);
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      fileName: [''],
      skills: this.fb.array([this.fb.control('')]),
      address: [],
      experiences: this.fb.array([
        this.fb.group({
          company: [''],
          duration: [''],
          startDate: [''],
          endDate: [''],
        }),
      ]),
    });

    if (this.data.id) {
      this.userService.getUserById(this.data.id).subscribe((res) => {
        this.editData = res;
        console.log(res);
        // this.userForm.setValue(res);
        this.populateForm(res);
      });
    }

    console.log('hello oninit');
  }

  populateForm(user: any) {
    this.userForm.patchValue({
      name: user.name,
      phone: user.phone,
      email: user.email,
      experiences: user.experiences,
      skills: user.skills,
      id: user.id,
    });

    // user.skills.forEach((skill: any) => this.addSkill());
    // user.experiences.forEach((exp: any) => this.addExperience());
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  addExperience() {
    this.experiences.push(
      this.fb.group({
        company: [''],
        duration: [''],
        startDate: [''],
        endDate: [''],
      }),
    );
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  get skills() {
    return this.userForm.get('skills') as FormArray;
  }

  get experiences() {
    return this.userForm.get('experiences') as FormArray;
  }

  get name() {
    return this.userForm.get('name');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get email() {
    return this.userForm.get('email');
  }

  handleSubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm);

    console.log(this.email?.hasError('required'));

    this.userForm.markAllAsTouched();

    if (this.userForm.valid) {
      if (this.userForm.value.id) {
        this.userService.editUser(this.userForm.value).subscribe((res) => {
          this.handleClose(true);
          this.snackbarService.openSnackBar('Successfully Updated.');
        });
      } else {
        // this.userService.addUser(this.userForm.value).subscribe((res) => {
        //   this.handleClose(true);
        //   this.snackbarService.openSnackBar('Successfully Added.');
        // });
      }
    }
  }

  handleClose(value: boolean = false) {
    this.ref.close(value);
  }
}
