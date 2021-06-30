import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { slideInOutAnimation, fadeAnimation } from '../../_animations/index';

import { Project } from '../project.model';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'work-app',
  templateUrl: 'work.component.html',
  styleUrls: [ '../../app.component.scss','work.component.scss'],
  animations: [fadeAnimation],
})
export class WorkComponent implements OnInit, OnDestroy {
  animation = true;
  private isFiltered: boolean = false;

  filters:string[] = ['All', 'UI', 'NodeJs', 'Angular', 'Laravel', 'Java'];
  filtersSelected:string[] = [];

  projects: Project[] = [
    {
      title: 'First Post',
      description: "This is the first post's content",
      preview_picture: 'https://i.ibb.co/DkmmDq7/picture.jpg',
      labels: ['UX', 'UI'],
      git_url: 'url_git',
      preview_url: '',
      details_url: 'details-url',
    },
    {
      title: 'First Post',
      description: "This is the first post's content",
      preview_picture: 'https://i.ibb.co/DkmmDq7/picture.jpg',
      labels: ['Angular', 'NodeJS'],
      git_url: 'url_git',
      preview_url: '',
      details_url: 'details-url',
    },
    {
      title: 'First Post',
      description: "This is the first post's content",
      preview_picture: 'https://i.ibb.co/DkmmDq7/picture.jpg',
      labels: ['Angular'],
      git_url: 'url_git',
      preview_url: 'details-url',
      details_url: '',
    },
    {
      title: 'First Post',
      description: "This is the first post's content",
      preview_picture: 'https://i.ibb.co/DkmmDq7/picture.jpg',
      labels: ['UX'],
      git_url: 'url_git',
      preview_url: 'details-url',
      details_url: '',
    },
    {
      title: 'First Post',
      description: "This is the first post's content",
      preview_picture: 'https://i.ibb.co/DkmmDq7/picture.jpg',
      labels: ['NodeJS'],
      git_url: '',
      preview_url: '',
      details_url: 'details-url',
    },
  ];
  private projectSub: Subscription = new Subscription();

  constructor(public projectService: ProjectService) {}

  isActive(value: string) {
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

  select(filter: string) {
    if (filter.toLowerCase() !== 'all') {
      if (
        !this.filtersSelected
          .toString()
          .toLowerCase()
          .includes(filter.toLowerCase())
      ) {
        this.filtersSelected.push(filter);
      } else {
        this.removeFromList(filter);
      }
    } else {
      this.filtersSelected = [];
    }
  }

  removeFromList(item: string) {
    const index = this.filtersSelected.indexOf(item);
    if (index > -1) {
      this.filtersSelected.splice(index, 1);
    }
  }

  ngOnInit() {
     this.projectService.getProjects();
    this.projectSub = this.projectService
      .getPostUpdateListener()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      });

  }

  ngOnDestroy() {
    this.projectSub.unsubscribe();
  }
}
