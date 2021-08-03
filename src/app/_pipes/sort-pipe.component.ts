import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../_models/project.model';
import { Sort } from '../_models/sort.model';

@Pipe({
  name: 'sortFilter',
  pure: false,
})
export class SortFilterPipe implements PipeTransform {
  transform(
    projects: Project[],
    sortFilterSelected: Sort
  ): any {
    if (!projects || !sortFilterSelected) {
      return projects;
    }

    let filtered = [...projects]
    if (sortFilterSelected.name === 'name') {
      filtered.sort((n1, n2) => {
        if (
          (n1.title > n2.title && sortFilterSelected.order === 'asc') ||
          (n1.title < n2.title && sortFilterSelected.order === 'desc')
        ) {
          return 1;
        }

        if (
          (n1.title < n2.title && sortFilterSelected.order === 'asc') ||
          (n1.title > n2.title && sortFilterSelected.order === 'desc')
        ) {
          return -1;
        }

        return 0;
      });
    }
    if (sortFilterSelected.name === 'new') {
      filtered.sort((n1, n2) => {
        if (n1.creation_date > n2.creation_date) {
          return -1;
        }

        if (n1.creation_date < n2.creation_date) {
          return 1;
        }

        return 0;
      });
    }
    return filtered;
  }
}
