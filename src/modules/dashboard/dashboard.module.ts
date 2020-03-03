import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardContainerComponent } from './containers/dashboard/dashboard.container';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

@NgModule({
  declarations: [DashboardContainerComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature(effects)
  ],
  entryComponents: [DashboardContainerComponent, DashboardComponent]
})
export class DashboardModule { }
