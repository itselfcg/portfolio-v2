import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOutAnimation', [
  transition(':enter', [
    style({transform: 'translateY(100%)'}),
    animate('250ms ease-in', style({transform: 'translateY(0%)'}))
  ])
]);
