import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-button-shell',
  templateUrl: './button-shell.component.html',
  styleUrl: './button-shell.component.css',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    MatButtonModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class ButtonShellComponent {
  constructor(private dialog: MatDialog) {}

  label = 'Primary';
  size = '';

  onPrimary(e: any) {
    console.log(e);
  }

  onEdit(e: any) {
    console.log(e);
  }
  addUser(e: any) {
    console.log(e);
  }
  onDelete(e: any) {
    console.log(e);
  }
  onView(e: any) {
    this.dialog.open(AddUserComponent, {
      width: '50%',
      disableClose: true,
      data: { title: 'Add', id: 1 },
    });
    console.log(e);
  }
}
