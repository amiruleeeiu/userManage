import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { COURSES } from '../../db-data';
import { CourseItemComponent } from '../course-item/course-item.component';
import { FilterByCategoryPipe } from '../pipe/filter-by-category.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  standalone: true,
  imports: [CommonModule, CourseItemComponent, FilterByCategoryPipe],
})
export class CoursesComponent {
  courses: any = COURSES;

  category = 'BEGINNER';

  handleChange(){
    this.courses[1].category='INTERMEDIATE'
    this.courses[3].category='INTERMEDIATE'
  }
}
