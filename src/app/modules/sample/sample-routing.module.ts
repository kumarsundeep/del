import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleLayoutComponent } from './sample-layout/sample-layout.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sample'
    },
    children: [
      {
        path: '',
        component: SampleLayoutComponent,
        loadChildren: './sample-dashboard/sample-dashboard.module#SampleDashboardModule',
        data: {
          title: 'Sample'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
