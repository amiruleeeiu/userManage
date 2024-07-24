import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFilter',
  standalone: true
})
export class AgeFilterPipe implements PipeTransform {
  transform(users: any[], minAge: number): any[] {
    if (!users || !minAge) {
      return users;
    }
    return users.filter((user) => user.age >= minAge);
  }
}
