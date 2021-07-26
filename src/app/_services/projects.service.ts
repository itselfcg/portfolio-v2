import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Project } from '../_models/project.model';

import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl + '/projects';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects: Project[] = [];
  private projectUpdated = new Subject<Project[]>();

  constructor(private http: HttpClient) {}

  getByLanguage(language: string) {
    const endpoint=API_URL+'/params';
    return this.http.get<{ projects: Project[] }>(endpoint, {
      params: { lang: language,active:'true',observe: 'response' },
    });
  }
}
