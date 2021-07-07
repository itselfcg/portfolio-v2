import { Component } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'home-app',
  templateUrl: 'home.component.html',
  styleUrls: ['../app.component.scss','home.component.scss'],
  animations: [fadeInAnimation]
})
export class HomeComponent {
  animation = true;
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
