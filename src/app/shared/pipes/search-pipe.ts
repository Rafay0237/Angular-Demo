import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, fields: string[] = []): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item) => {
      return fields.some((field) => {
        return item[field]?.toString().toLowerCase().includes(searchTerm);
      });
    });
  }
}
