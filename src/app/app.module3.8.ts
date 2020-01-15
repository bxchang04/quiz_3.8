import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; //check this

import { HttpClientModule } from '@angular/common/http';
import { QuestionFormComponent } from './question-form/question-form.component'; //check this
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';

import { RouterModule, Routes } from '@angular/router';

import { Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: ':quizId', component: QuestionsComponent },
  { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    QuestionsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})

export class AppModule { }
export class AppComponent {}
