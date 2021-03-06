import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CaseStudy } from '../_models/case-study.model';
import { CaseStudyService } from '../_services/case-study.service';

import { fadeInAnimation, fadeOutAnimation } from '../_animations/index';
import { Router } from '@angular/router';
import { NavbarService } from '../_services/navbar.service';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'case-study-app',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation],
})
export class CaseStudyComponent {
  public animation = true;
  private caseId: string = '';
  public caseStudy = {} as CaseStudy;
  showLoader = false;

  constructor(
    public router: Router,
    public caseStudyService: CaseStudyService,
    public route: ActivatedRoute,
    private loaderService: LoaderService
  ) {

    this.loaderService.isLoaderShown.subscribe(
      (isLoaderShown) => (this.showLoader = isLoaderShown)
    );
    this.loaderService.showLoader();


  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.caseId = paramMap.get('id') || '';
        var language = localStorage.getItem('language')!;
        this.caseStudyService.getCaseStudy(language, this.caseId).subscribe(
          (result) => {
            if (result.body != null) {
              this.caseStudy = result.body.caseStudy;
              this.loaderService.hideLoader();
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
