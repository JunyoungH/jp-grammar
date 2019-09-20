import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdjectiveComponent } from './adjective/adjective.component';
import { VerbComponent } from './verb/verb.component';
import { SpecialExpressionComponent } from './special-expression/special-expression.component';
import { AdverbComponent } from './adverb/adverb.component';
import { ParticleComponent } from './particle/particle.component';
import { BasicExpressionComponent } from './basic-expression/basic-expression.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule, 
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
  MatIconModule
} from '@angular/material';
import { EssentialGrammarComponent } from './essential-grammar/essential-grammar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticleComponent,
    AdjectiveComponent,
    VerbComponent,
    SpecialExpressionComponent,
    AdverbComponent,
    BasicExpressionComponent,
    EssentialGrammarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
