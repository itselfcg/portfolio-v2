import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
trigger('slideInOutAnimation', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('* => *', [
    animate(200, style({ transform: 'translatey(-1000%)',opacity:'.8' }))
  ])
]);
