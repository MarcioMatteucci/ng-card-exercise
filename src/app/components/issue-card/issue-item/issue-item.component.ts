import { Component, Input, OnInit } from '@angular/core';
import { Issue, ISSUE_STATE } from '../models/issue.type';
import {
  faCheck,
  faRotateLeft,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.scss',
})
export class IssueItemComponent implements OnInit {
  @Input() issue: Issue | undefined;
  actionIcon: IconDefinition | undefined;

  issueState = ISSUE_STATE;
  ngOnInit(): void {
    this.actionIcon =
      this.issue?.state === ISSUE_STATE.valid ? faRotateLeft : faCheck;
  }
}
