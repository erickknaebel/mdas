import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssessmentComponent } from './assessment/assessment.component';

const routes: Routes = [
    { path: '', component: AssessmentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AssessmentRoutingModule { }