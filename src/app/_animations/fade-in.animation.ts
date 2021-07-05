import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 })),
  ]),
]);
