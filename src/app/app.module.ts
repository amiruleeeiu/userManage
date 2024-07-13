import { NgOptimizedImage } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule, Routes } from '@angular/router';
import { AboutChildComponent } from './about-child/about-child.component';
import { AboutComponent } from './about/about.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddressComponent } from './address/address.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    loadComponent: () =>
      import('../app/user-list-shell/user-list-shell.component').then(
        (t) => t.UserListShellComponent,
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../app/user-detail/user-detail.component').then(
        (t) => t.UserDetailComponent,
      ),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomeComponent,
    AboutChildComponent,
    FileUploadComponent,
    AddressComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    NgOptimizedImage,
    RouterModule.forRoot(routes),
  ],
})
export class AppModule {}
