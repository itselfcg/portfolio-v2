import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeAnimation =
trigger('openClose', [
  transition('* => *', [
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 }))
  ]),
]);
