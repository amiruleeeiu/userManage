import { Component, OnInit, signal } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { UserService } from '../user.service';
import { SnackbarService } from '../snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrl: './user-list-shell.component.css',
  standalone: true,
  imports: [UsersListComponent]
})
export class UserListShellComponent implements OnInit {

  // page = 1;
  // limit = 5;

  dataSource = signal<any>([]);

  constructor(
    public userService: UserService,
    private snackBarService: SnackbarService,
    public userDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.fetchData({
      page: 1, limit: 5
    });
  }
  // page: number = 1, limit: number = 5
  fetchData(pageChangeInfo: {page:number, limit:number}) {
    this.userService
      .getUsers(`?_page=${pageChangeInfo.page}&_limit=${pageChangeInfo.limit}`)
      .subscribe((res) => {
        // console.log(res)
        this.dataSource.set(res);
      });
  }

  handleDelete(id: number) {
    this.userService.deleteUser(id).subscribe((res) => {
      console.log(res);
      this.fetchData({
        page: 1, limit: 5
      });
      this.snackBarService.openSnackBar('Successfully Deleted.');
    });
  }

  openDialog(id: number = 0) {
    const dialogRef = this.userDialog.open(AddUserComponent, {
      width: '50%',
      disableClose: true,
      data: { title: 'Add', id },
    });

    dialogRef.afterClosed().subscribe((val) => {
      if (val == true) {
        this.fetchData({
          page: 1, limit: 5
        })
        // this.fetchData.emit({
        //   page: 1, limit: 5
        // });
      }
    });
  }

}
