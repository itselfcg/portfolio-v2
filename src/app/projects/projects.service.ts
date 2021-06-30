import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Project } from "./project.model";

@Injectable({ providedIn: "root" })
export class ProjectService {
  private projects: Project[] = [];
  private projectUpdated = new Subject<Project[]>();

  constructor(private http: HttpClient) {}

  getProjects() {
    this.http
      .get<{ message: string; projects: Project[] }>(
        "http://localhost:3000/api/projects"
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
