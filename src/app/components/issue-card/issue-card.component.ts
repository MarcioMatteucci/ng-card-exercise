import { Component } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  stagger,
  query,
  state,
} from '@angular/animations';
import { Issue, ISSUE_STATE } from './models/issue.type';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrl: './issue-card.component.scss',
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.issue-item', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(125, [
            animate(
              '125ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
      transition(':leave', [
        query('.issue-item', [
          stagger(-125, [
            animate(
              '125ms ease-in',
              style({ opacity: 0, transform: 'translateY(20px)' })
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('showIssuesIconRotate', [
      state('pointDown', style({ transform: 'rotate(0deg)' })),
      state('pointUp', style({ transform: 'rotate(180deg)' })),
      transition('pointUp => pointDown', animate('300ms ease-in')),
      transition('pointDown => pointUp', animate('300ms ease-out')),
    ]),
  ],
})
export class IssueCardComponent {
  showIssueList = false;

  issues: Issue[] = [
    {
      user: 'Ricardo Carusso Lombardi',
      date: new Date('2024-07-11T10:30:00'),
      description: 'Documento no legible, por favor cargar uno nuevo',
      state: ISSUE_STATE.valid,
    },
    {
      user: 'Donald Arthur Normal',
      date: new Date('2024-07-10T15:45:00'),
      description: 'Descripción del segundo issue',
      state: ISSUE_STATE.invalid,
    },
    {
      user: 'Peter Parker',
      date: new Date('2024-07-09T08:00:00'),
      description: 'Descripción del tercer issue',
      state: ISSUE_STATE.valid,
    },
  ];

  toogleIssueList() {
    this.showIssueList = !this.showIssueList;
  }

  addIssue() {}
}
