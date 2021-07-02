import { Component } from '@angular/core';
import { fadeAnimation, slideInOutAnimation } from './_animations/index';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation, slideInOutAnimation],
})
export class AppComponent {
  title = 'portfolio-v2';

  constructor(public translate: TranslateService) {
    if (localStorage.getItem('language')) {
      translate.setDefaultLang(localStorage.getItem('language')!);
      translate.use(localStorage.getItem('language')!);
    } else {
      console.log(2343);
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('language', 'en');
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);

  }
}
