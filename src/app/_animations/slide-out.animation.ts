import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

export const slideOutAnimation = trigger('slideOutAnimation', [
  transition(':leave', [
    animate('10000ms ease-in', style({transform: 'translateY(-100%)'}))
  ])
]);
