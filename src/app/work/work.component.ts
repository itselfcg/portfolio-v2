import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeOutAnimation, fadeInAnimation } from '../_animations/index';

import { Project } from '../_models/project.model';
import { ProjectService } from '../_services/projects.service';
import { NavbarService } from '../_services/navbar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'work-app',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation],
})
export class WorkComponent implements OnInit, OnDestroy {
  animation = true;
  private projectSub: Subscription = new Subscription();
  language = localStorage.getItem('language');
  projects: Project[] = [];
  filters: string[] = [];
  filtersSelected: string[] = [];
  isLoading = false;
  allLabel = 'All';

  constructor(
    public projectService: ProjectService,
    public nav: NavbarService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.translate.get('nav.all').subscribe((text: string) => {
      this.allLabel = text;
    });
    this.nav.hide();
    this.isLoading = true;
    this.projectService.getByLanguage(this.language!).subscribe(
      (result) => {
        // Assign project from service to local variable. Filter the text by laguage accordint to the actual laguange

        if (result.projects !== null) {
          this.projects = result.projects;
          // Add project's labels to filter lists
          for (var i = 0; i < this.projects.length; i++) {
            for (var j = 0; j < this.projects[i].labels.length; j++) {
              if (this.filters.indexOf(this.projects[i].labels[j]) == -1) {
                this.filters.push(this.projects[i].labels[j]);
              }
            }
          }
          //Add filter all to the start of our filter list
          this.filters.unshift(this.allLabel);
          this.nav.show();
          this.isLoading = false;
        }
      },
      (err) => {
        this.nav.show();
        this.isLoading = false;
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
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return true;
      }
    } else {
      if (value.toLowerCase() === this.allLabel) {
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
    if (filter.toLowerCase() !== this.allLabel) {
      if (
        !this.filtersSelected
          .toString()
          .toLowerCase()
          .includes(filter.toLowerCase())
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
}
