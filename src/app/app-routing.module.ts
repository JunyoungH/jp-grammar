import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticleComponent } from './particle/particle.component';
import { AdjectiveComponent } from './adjective/adjective.component';
import { AdverbComponent } from './adverb/adverb.component';
import { VerbComponent } from './verb/verb.component';
import { SpecialExpressionComponent } from './special-expression/special-expression.component';

const routes: Routes = [
  {path: 'particle', component: ParticleComponent},
  {path: 'adjective', component: AdjectiveComponent},
  {path: 'adverb', component: AdverbComponent},
  {path: 'verb', component: VerbComponent},
  {path: 'special-expression', component: SpecialExpressionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
