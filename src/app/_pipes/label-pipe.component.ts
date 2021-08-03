import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../_models/project.model';
import { Sort } from '../_models/sort.model';

@Pipe({
  name: 'labelFilter',
  pure: false,
})
export class LabelFilterPipe implements PipeTransform {
  transform(
    projects: any[],
    filters: string[]
  ): any {
    if (!projects || !filters) {
      return projects;
    }

    let filtered = projects.filter(
      (item) =>
        (filters.length > 0 &&
          filters.some((filter) =>
            item.labels.toString().toLowerCase().includes(filter.toLowerCase())
          )) ||
        (filters.length == 0 &&
          item.labels.toString().toLowerCase().includes(filters))
    );

    return filtered;
  }
}
