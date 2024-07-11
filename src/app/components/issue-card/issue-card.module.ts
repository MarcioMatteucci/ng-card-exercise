import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueCardComponent } from './issue-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { IssueItemComponent } from './issue-item/issue-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [IssueCardComponent, IssueItemComponent],
  exports: [IssueCardComponent],
  imports: [CommonModule, BrowserAnimationsModule, BrowserModule, FontAwesomeModule],
})
export class IssueCardModule {}
