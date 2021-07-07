import {
  trigger,
  state,
  animate,
  transition,
  style,
  query,
  animateChild,
  group,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('*=>HomePage', [
    style({ 'background-color':'#285a3d',opacity: 0 }),
    animate("500ms  ease-in",style({ opacity: 1,  })),
  ]),
  transition('CaseStudyPage=>WorkPage', [
    style({ 'background-color':'#285a3d',opacity: 0 }),
    animate("500ms  ease-in",style({ opacity: 1,  })),
  ]),
  transition('*=>WorkPage', [
    style({ 'background-color':'#285a3d',opacity: 0 }),
    animate("500ms  ease-in",style({ opacity: 1,  })),
  ]),
  transition('*=>*', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)' }),
          animate('.3s ease-out', style({ transform: 'translateY(0%)' })),
        ]
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('.3s ease-out', style({ transform: 'translateY(-100%)' })),
        ]
      ),
    ]),
    query(':leave', animateChild()),
    query(':enter', animateChild()),
  ])
]);
