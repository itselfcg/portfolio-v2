import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CaseStudy } from '../_models/case-study.model';
import { CaseStudyService } from '../_services/case-study.service';

import { fadeInAnimation, fadeOutAnimation,slideInOutAnimation } from '../_animations/index';
import { Router } from '@angular/router';
import { NavbarService } from '../_services/navbar.service';

@Component({
  selector: 'case-study-app',
  templateUrl: './case-study.component.html',
  styleUrls: ['../app.component.scss', './case-study.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation,slideInOutAnimation],
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
    ,public nav: NavbarService
  ) {}

  ngOnInit() {
    this.nav.hide();
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
                this.nav.show();
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
