import { Component } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'home-app',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: [fadeInAnimation]
})
export class HomeComponent {
  animation = true;
  constructor(public translate: TranslateService) {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
