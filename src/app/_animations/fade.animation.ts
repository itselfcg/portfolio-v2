import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate("500ms  ease-in", style({ opacity: 1 })),
  ]),
]);


 export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('500ms ease-out', style({ opacity: 0 }))
  ])
]);


export const fadeOutAnimation = trigger('fadeOutAnimation', [
  transition(':enter', [
    style({ opacity: 1 }),
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ opacity: 0 }))
  ])
])


