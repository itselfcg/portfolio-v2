import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const fadeOutAnimation = trigger('fadeOutAnimation', [
  transition(':enter', [
    style({ opacity: 1 }),
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({ opacity: 0 }))
  ])
])
