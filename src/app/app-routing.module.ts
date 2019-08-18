import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicExpressionComponent } from './basic-expression/basic-expression.component';
import { ParticleComponent } from './particle/particle.component';
import { AdjectiveComponent } from './adjective/adjective.component';
import { AdverbComponent } from './adverb/adverb.component';
import { VerbComponent } from './verb/verb.component';
import { SpecialExpressionComponent } from './special-expression/special-expression.component';

const routes: Routes = [
  {path: '',   redirectTo: '/particle', pathMatch: 'full' },
  {path: 'basic', component: BasicExpressionComponent},
  {path: 'particle', component: ParticleComponent},
  {path: 'adjective', component: AdjectiveComponent},
  {path: 'adverb', component: AdverbComponent},
  {path: 'verb', component: VerbComponent},
  {path: 'special', component: SpecialExpressionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
