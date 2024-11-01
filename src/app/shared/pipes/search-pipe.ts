import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], searchTerm: string, fields: string[] = []): any[] {
    if (!users || !searchTerm) {
      return users;
    }

    searchTerm = searchTerm.toLowerCase();

    return users.filter((user) => {
      return fields.some((field) => {
        return user[field]?.toString().toLowerCase().includes(searchTerm);
      });
    });
  }
}
