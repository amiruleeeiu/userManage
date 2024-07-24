import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProfessionFilterPipe } from '../pipe/profession-filter.pipe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true,
  imports: [CommonModule, ProfessionFilterPipe],
})
export class AboutComponent {
  dataValue = signal<number>(0);

  profession = 'Professor';

  users = [
    { name: 'Alice', age: 25, subject: 'physics', profession: 'Engineer' },
    { name: 'Bob', age: 30, subject: 'physics', profession: 'Doctor' },
    { name: 'Charlie', age: 35, subject: 'chemistry', profession: 'Engineer' },
    { name: 'David', age: 40, subject: 'math', profession: 'Teacher' },
    { name: 'David', age: 40, subject: 'math', profession: 'Professor' },
    { name: 'David', age: 40, subject: 'math', profession: 'Doctor' },
  ];

  trackByUserId(index: number, user: any): number {
    return user.id;
  }

  incrementCount(value: number) {
    console.log(value);
    this.dataValue.set(value);
  }
}
