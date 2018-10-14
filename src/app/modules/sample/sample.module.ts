import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleLayoutComponent } from './sample-layout/sample-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule
  ],
  declarations: [SampleLayoutComponent]
})
export class SampleModule { }
