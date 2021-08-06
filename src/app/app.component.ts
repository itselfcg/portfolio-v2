import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './_animations/animations';
import { LoaderService } from './_services/loader.service';
import { fadeInAnimation, fadeOutAnimation } from './_animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation, fadeInAnimation],
})
export class AppComponent implements OnInit {
  title = 'portfolio-v2';
  showLoader = false;

  constructor(
    public translate: TranslateService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.loaderService.isLoaderShown.subscribe(
      (isLoaderShown) => (this.showLoader = isLoaderShown)
    );
    this.loaderService.showLoader();
    if (localStorage.getItem('language')) {
      this.translate.setDefaultLang(localStorage.getItem('language')!);
      this.translate
        .use(localStorage.getItem('language')!)
        .subscribe((result) => {
          this.loaderService.hideLoader();
        });
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en').subscribe((result) => {
        this.loaderService.hideLoader();
      });
      localStorage.setItem('language', 'en');
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
