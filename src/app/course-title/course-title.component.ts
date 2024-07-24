import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-title',
  templateUrl: './course-title.component.html',
  styleUrl: './course-title.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class CourseTitleComponent {
  @Input() title!: string;
  @Input() color!: string;
}
