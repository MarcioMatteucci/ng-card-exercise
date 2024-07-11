import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IssueCardModule } from './components/issue-card/issue-card.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IssueCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
