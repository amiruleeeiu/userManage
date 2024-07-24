import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  standalone: true,
  pure: false,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(courses: any[], course: any) {
    if (!courses || !course) {
      return courses;
    }
    return courses.filter((i) => i?.category == course);
  }
}
