import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CourseTitleComponent } from '../course-title/course-title.component';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
  standalone: true,
  imports: [CommonModule,CourseTitleComponent],
})
export class CourseItemComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.course);
  }
  @Input() course!: any;

}
