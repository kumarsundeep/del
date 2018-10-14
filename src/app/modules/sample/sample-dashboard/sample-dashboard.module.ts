import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleDashboardRoutingModule } from './sample-dashboard-routing.module';
import { SampleDashboardComponent } from './sample-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SampleDashboardRoutingModule
  ],
  declarations: [SampleDashboardComponent]
})
export class SampleDashboardModule { }
