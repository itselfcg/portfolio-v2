import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CaseStudy } from '../_models/case-study.model';
import { CaseStudyService } from '../_services/case-study.service';

import { fadeAnimation } from '../_animations/index';
import { Router } from '@angular/router';

@Component({
  selector: 'case-study-app',
  templateUrl: './case-study.component.html',
  styleUrls: ['../app.component.scss', './case-study.component.scss'],
  animations: [fadeAnimation],
})
export class CaseStudyComponent {
  public animation = true;
  private caseId: string = '';
  public caseStudy!: CaseStudy;

  constructor(
    public router: Router,
    public caseStudyService: CaseStudyService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.caseId = paramMap.get('id') || '';
        this.caseStudyService
          .getCaseStudy(this.caseId)
          .subscribe((postData) => {
            if (postData.status === '200') {
              this.caseStudy = postData.caseStudy;




            } else {
              console.log(postData.caseStudy);

              this.router.navigate(['/work']);
            }
          });
      }
    });
  }
}
