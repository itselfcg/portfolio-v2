import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CaseStudy } from '../_models/case-study.model';
import { CaseStudyService } from '../_services/case-study.service';

import { fadeAnimation, inOutAnimation } from '../_animations/index';
import { Router } from '@angular/router';

@Component({
  selector: 'case-study-app',
  templateUrl: './case-study.component.html',
  styleUrls: ['../app.component.scss', './case-study.component.scss'],
  animations: [fadeAnimation, inOutAnimation],
})
export class CaseStudyComponent {
  public animation = true;
  private caseId: string = '';
  public caseStudy = {} as CaseStudy;
  isLoading = false;

  constructor(
    public router: Router,
    public caseStudyService: CaseStudyService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.caseId = paramMap.get('id') || '';
        var language = localStorage.getItem('language')!;
        this.caseStudyService.getCaseStudy(language, this.caseId).subscribe(
          (result) => {
            if (result.body != null) {
              this.caseStudy = result.body.caseStudy;
              setTimeout(() => {
                this.isLoading = false;
              }, 500);
            }
          },
          (error) => {
            this.router.navigate(['/work']);
          }
        );
      }
    });
  }
}
