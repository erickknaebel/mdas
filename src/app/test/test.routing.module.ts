import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
    {path: 'home', component: TestingComponent },
    {path: '*', component: TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
