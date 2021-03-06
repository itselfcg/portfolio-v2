import { Component, OnInit, OnDestroy, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeInAnimation, fadeOutAnimation,fadeInOutAnimation } from '../_animations/index';

import { Project } from '../_models/project.model';
import { ProjectService } from '../_services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { Sort } from '../_models/sort.model';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'work-app',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation,fadeInOutAnimation],
})
export class WorkComponent implements OnInit, OnDestroy {
  private projectSub: Subscription = new Subscription();
  language = localStorage.getItem('language');
  projects: Project[] = [];
  filters: string[] = [];
  filtersSelected: string[] = [];
  showLoader = false;
  allLabel = 'All';
  sortFilters: Sort[] = [
    {
      name: 'new',
      description: 'New projects',
      order: 'asc',
    },
    { name: 'name', description: 'Project name A to Z', order: 'asc' },
    { name: 'name', description: 'Project name Z to A', order: 'desc' },
  ];
  sortSelected: Sort = {
    name: this.sortFilters[0].name,
    description: this.sortFilters[0].description,
    order: this.sortFilters[0].order,
  };

  constructor(
    public projectService: ProjectService,
    public translate: TranslateService,
    private loaderService: LoaderService

  ) {
    this.loaderService.isLoaderShown.subscribe(
      (isLoaderShown) => (this.showLoader = isLoaderShown)
    );
    this.loaderService.showLoader();

  }

  ngOnInit() {

    this.translate.get('actions.all').subscribe((text: string) => {
      this.allLabel = text;
    });

    this.translate.get('work').subscribe((text: any) => {
      for (let i = 0; i < this.sortFilters.length; i++) {
        if (this.sortFilters[i].name === 'new') {
          if (this.sortFilters[i].order === 'asc') {

            this.sortFilters[i].description = text.new_asc;
          }

        }
        if (this.sortFilters[i].name === 'name') {
          if (this.sortFilters[i].order === 'asc') {
            this.sortFilters[i].description = text.name_asc;
          }
          if (this.sortFilters[i].order === 'desc') {
            this.sortFilters[i].description = text.name_desc;
          }
        }

      }
      this.onSelectSort(this.sortFilters[0]);

    });

    this.projectService.getByLanguage(this.language!).subscribe(
      (result) => {
        // Assign project from service to local variable. Filter the text by laguage accordint to the actual laguage
        if (result.projects !== null) {
          this.projects = result.projects;
          // Add project's labels to filter lists
          if (this.projects) {
            for (var i = 0; i < this.projects.length; i++) {
              for (var j = 0; j < this.projects[i].labels.length; j++) {
                if (
                  this.filters.indexOf(this.projects[i].labels[j].trim()) === -1
                ) {
                  this.filters.push(this.projects[i].labels[j].trim());
                }
              }
            }
            //Add filter all to the start of our filter list
          }
          this.filters.sort();
          this.filters.unshift(this.allLabel);
          this.loaderService.hideLoader();
        }
      },
      (err) => {
        this.loaderService.hideLoader();
      }
    );
  }

  ngOnDestroy() {
    this.projectSub.unsubscribe();
  }

  /**
   * Determines if a value is in the filter-selected to apply an style to filter buttons.\
   * True if it's in the list, false if not.
   * @param value The value to locate in the list.
   */
  isFilterActive(value: string) {
    if (this.filtersSelected.length > 0) {
      if (
        this.filtersSelected

          .includes(value)
      ) {
        return true;
      }
    } else {
      if (value === this.allLabel) {
        return true;
      }
    }
    return false;
  }

  /**
   * Adds a value to the filters selecteded list or removes a value from it if it's already in it.
   * @param value The value to locate in the list.
   */
  selectFilter(filter: string) {
    if (filter !== this.allLabel) {
      if (
        !this.filtersSelected
          .includes(filter)
      ) {
        this.filtersSelected.push(filter);
      } else {
        this.filtersSelected = this.removeFromFilterSelectedList(filter);
      }
    } else {
      this.filtersSelected = [];
    }
  }

  /**
   * Removes a value from the filters selecteded list.
   * @param value The value to remove in the list.
   */
  removeFromFilterSelectedList(item: string) {
    var list = [...this.filtersSelected];
    const index = this.filtersSelected.indexOf(item);
    if (index > -1) {
      list.splice(index, 1);
    }
    return list;
  }

  onSelectSort(selected: Sort) {
    this.sortSelected = {
      name: selected.name,
      description: selected.description,
      order: selected.order,
    };
  }
}
