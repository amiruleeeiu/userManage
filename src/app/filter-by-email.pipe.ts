import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByEmail',
  standalone: true,
})
export class FilterByEmailPipe implements PipeTransform {
  transform(users: any[], sub: string): any[] {
    if (!users || !sub) {
      return users;
    }
    return users.filter((user) => user.subject === sub);
  }
}
