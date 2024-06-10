import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class UserDetailComponent implements OnInit {
  id: null | string = null;
  userData: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');

      this.id = id;

      console.log(typeof id);

      if (id) {
        this.userService.getUserById(Number(id)).subscribe((res) => {
          this.userData = res;
          console.log(res);
        });
      }
    });
  }

  back() {
    this.router.navigate(['']);
  }
}
