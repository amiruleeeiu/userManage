import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'professionFilter',
  standalone: true,
})
export class ProfessionFilterPipe implements PipeTransform {
  transform(users: any[], value: any) {
    if (!value || !users) {
      return users;
    }
    return users?.filter((user) => user?.profession == value);
  }
}
