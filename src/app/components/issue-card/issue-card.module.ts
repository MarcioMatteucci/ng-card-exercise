import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueCardComponent } from './issue-card.component';

@NgModule({
  declarations: [IssueCardComponent],
  exports: [IssueCardComponent],
  imports: [CommonModule],
})
export class IssueCardModule {}
