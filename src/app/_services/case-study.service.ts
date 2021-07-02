import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CaseStudy } from '../_models/case-study.model';

@Injectable({ providedIn: 'root' })
export class CaseStudyService {
  private caseStudy!: CaseStudy;
  private caseUpdated = new Subject<CaseStudy>();

  constructor(private http: HttpClient, private router: Router) {}

  getCaseStudy(language:string,id: string) {
    return this.http.get<{ caseStudy: CaseStudy}>
    ('http://localhost:3000/api/cases/'+language+'/'+id, { observe: 'response' });
  }


}
