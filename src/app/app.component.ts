import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './_animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'portfolio-v2';
  animation = true;

  constructor(public translate: TranslateService) {
    if (localStorage.getItem('language')) {
      translate.setDefaultLang(localStorage.getItem('language')!);
      translate.use(localStorage.getItem('language')!);
    } else {
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('language', 'en');
    }

  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
