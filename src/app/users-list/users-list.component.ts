import { MatTableModule } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { SnackbarService } from '../snackbar.service';
import { UserService } from '../user.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
  ],
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['serial', 'name', 'email', 'action'];
  dataSource: any = [];

  total = 100;
  page = 1;
  limit = 5;

  constructor(
    public userDialog: MatDialog,
    public userService: UserService,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.userService
      .getUsers(`?_page=${this.page}&_limit=${this.limit}`)
      .subscribe((res) => {
        this.dataSource = res;
      });
  }

  addUser() {
    this.openDialog();
  }

  openDialog(id: number = 0) {
    const dialogRef = this.userDialog.open(AddUserComponent, {
      width: '50%',
      disableClose: true,
      data: { title: 'Add', id },
    });

    dialogRef.afterClosed().subscribe((val) => {
      if (val == true) {
        this.fetchData();
      }
    });
  }

  editUser(id: number) {
    this.openDialog(id);
  }

  handlePage(e: PageEvent) {
    console.log(e);
    this.page = e.pageIndex;
    this.limit = e.pageSize;
    this.fetchData();
  }

  handleDelete(id: number) {
    this.userService.deleteUser(id).subscribe((res) => {
      console.log(res);
      this.fetchData();
      this.snackBarService.openSnackBar('Successfully Deleted.');
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
