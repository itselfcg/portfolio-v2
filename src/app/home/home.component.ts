import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../_services/loader.service';
import { fadeInAnimation, fadeOutAnimation,fadeInOutAnimation } from '../_animations/index';

@Component({
  selector: 'home-app',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation,fadeInOutAnimation],
})
export class HomeComponent implements OnInit {
  showLoader = false;

  constructor(
    public translate: TranslateService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.loaderService.isLoaderShown.subscribe(
      (isLoaderShown) => (this.showLoader = true)
    );
  }

  useLanguage(language: string): void {
    this.loaderService.showLoader();
    this.translate.use(language).subscribe((result) => {
      this.loaderService.hideLoader();
    });
    localStorage.setItem('language', language);
  }
}
