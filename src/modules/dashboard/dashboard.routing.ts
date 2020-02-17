import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ReportsComponent } from './containers/reports/reports.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'reports', component: ReportsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }