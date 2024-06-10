import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = `http://localhost:9000/users`;

  constructor(private http: HttpClient) {}
  addUser(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }
  editUser(data: any) {
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }

  getUsers(url: string) {
    return this.http.get(`${this.apiUrl}?${url}`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
