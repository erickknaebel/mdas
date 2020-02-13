import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentRoutingModule } from './assessment.routing';

@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule,
    AssessmentRoutingModule
  ]
})
export class AssessmentModule { }
