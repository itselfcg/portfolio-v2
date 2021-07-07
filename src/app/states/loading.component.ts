import { Component } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';


@Component({
  selector: 'loading-app-state',
  templateUrl: 'loading.component.html',
  styleUrls: ['../app.component.scss','loading.component.scss'],
  animations: [fadeInAnimation]
})
export class LoadingComponent {

}
