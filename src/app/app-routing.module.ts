import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from './shared/containers/login/login.container';

const routes: Routes = [
  { path: '', component: LoginContainerComponent },
  { path: 'login', component: LoginContainerComponent },
  // { path: 'login', loadChildren: () => import('../modules/login/login.module').then(m => m.LoginModule)},
  { path: 'admin', loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule)},
  { path: 'dashboard', loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'assessment', loadChildren: () => import('../modules/assessment/assessment.module').then(m => m.AssessmentModule)}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ROUTES = routes;
