import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardContainerComponent } from './containers/dashboard/dashboard.container';

const routes: Routes = [
    { path: '', component: DashboardContainerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }