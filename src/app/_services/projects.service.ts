import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Project } from "../_models/project.model";

import { environment } from 'src/environments/environment';
const API_URL=environment.apiUrl+'/projects'

@Injectable({ providedIn: "root" })
export class ProjectService {
  private projects: Project[] = [];
  private projectUpdated = new Subject<Project[]>();

  constructor(private http: HttpClient) {}

  getProjects(language:string) {
    this.http
      .get<{ message: string; projects: Project[] }>(
        API_URL+"/"+language
      )
      .subscribe(postData => {
        this.projects = postData.projects;
        this.projectUpdated.next([...this.projects]);
      });

  }

  getPostUpdateListener() {
    return this.projectUpdated.asObservable();
  }
}
