import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectsFilter',
  pure: false,
})
export class ProjectsFilterPipe implements PipeTransform {
  transform(projects: any[], filters: string[]): any {
    if (!projects || !filters) {
      return projects;
    }

    return projects.filter(
      (item) =>
        (filters.length > 0 &&
          filters.some((filter) =>
            item.labels.toString().toLowerCase().includes(filter.toLowerCase())
          )) ||
        (filters.length == 0 &&
          item.labels.toString().toLowerCase().includes(filters))
    );
  }
}
