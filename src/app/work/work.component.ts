import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeOutAnimation, fadeInAnimation } from '../_animations/index';

import { Project } from '../_models/project.model';
import { ProjectService } from '../_services/projects.service';
import { NavbarService } from '../_services/navbar.service';

@Component({
  selector: 'work-app',
  templateUrl: 'work.component.html',
  styleUrls: ['../app.component.scss', 'work.component.scss'],
  animations: [fadeInAnimation,fadeOutAnimation],
})
export class WorkComponent implements OnInit, OnDestroy {
  animation = true;
  private projectSub: Subscription = new Subscription();
  language = localStorage.getItem('language');
  projects: Project[] = [];
  filters: string[] = [];
  filtersSelected: string[] = [];
  isLoading = false;

  constructor(public projectService: ProjectService,public nav: NavbarService ) {}

  ngOnInit() {
    this.nav.hide();
    this.isLoading = true;
    this.projectService.getProjects(this.language!);
    this.projectSub = this.projectService
      .getPostUpdateListener()
      .subscribe((projects: Project[]) => {
        // Assign project from service to local variable. Filter the text by laguage accordint to the actual laguange
        this.projects = projects;
        console.log(projects);
        // Add project's labels to filter lists
        for (var i = 0; i < projects.length; i++) {
          for (var j = 0; j < projects[i].labels.length; j++) {
            if (this.filters.indexOf(projects[i].labels[j]) == -1) {
              this.filters.push(projects[i].labels[j]);
            }
          }
        }

        //Add filter all to the start of our filter list
        this.filters.unshift('All');

        setTimeout(() => {
          this.nav.show();
          this.isLoading = false;
        }, 500);
      });
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
      if (value.toLowerCase() == 'all') {
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
    if (filter.toLowerCase() !== 'all') {
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
