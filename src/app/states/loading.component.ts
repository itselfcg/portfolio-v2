import { Component } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';


@Component({
  selector: 'loading-app-state',
  templateUrl: 'loading.component.html',
  styleUrls: ['loading.component.scss'],
  animations: [fadeInAnimation]
})
export class LoadingComponent {

}
