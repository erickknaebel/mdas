import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from 'src/modules/login/containers';

const routes: Routes = [
  { path: 'login', component: LoginContainerComponent},
  // { path: 'login', loadChildren: () => import('../modules/login/login.module').then(m => m.LoginModule)},
  { path: 'admin', loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule)},
  { path: 'dashboard', loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'assessment', loadChildren: () => import('../modules/assessment/assessment.module').then(m => m.AssessmentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
