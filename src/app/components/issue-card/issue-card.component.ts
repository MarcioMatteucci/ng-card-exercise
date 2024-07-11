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

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrl: './issue-card.component.scss',
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.issue-item', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(75, [
            animate(
              '75ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
      transition(':leave', [
        query('.issue-item', [
          stagger(-75, [
            animate(
              '75ms ease-in',
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

  toogleIssueList() {
    this.showIssueList = !this.showIssueList;
  }

  addIssue() {}
}
