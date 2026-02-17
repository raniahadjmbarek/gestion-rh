import { Routes } from '@angular/router';

import { LoginComponent } from './admin/pages/login/login';
import { ReinitialiserComponent } from './admin/pages/reinitialiser/reinitialiser';
import { DashboardComponent } from './admin/pages/dashboard/dashboard';
import { CandidaturesComponent } from './admin/pages/candidatures/candidatures';
import { OffresComponent } from './admin/pages/offres/offres';
import { EquipeRhComponent } from './admin/pages/equipe-rh/equipe-rh';
import { FeedbackComponent } from './admin/pages/feedback/feedback';
import { TestPsychoComponent } from './admin/pages/test-psycho/test-psycho';
import { TestTechniqueComponent } from './admin/pages/test-technique/test-technique';
import { PosteComponent } from './admin/pages/poste/poste'; // ✅ AJOUTÉ

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'reinitialiser', component: ReinitialiserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'candidatures', component: CandidaturesComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'poste', component: PosteComponent }, // ✅ NOUVELLE ROUTE
  { path: 'equipe-rh', component: EquipeRhComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'test-psycho', component: TestPsychoComponent },
  { path: 'test-technique', component: TestTechniqueComponent }

];
