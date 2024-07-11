import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueCardModule } from './components/issue-card/issue-card.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IssueCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
