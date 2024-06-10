import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private matSkackBar: MatSnackBar) {}

  openSnackBar(messsage: string) {
    this.matSkackBar.open(messsage, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['bg-red-600'],
    });
  }
}
