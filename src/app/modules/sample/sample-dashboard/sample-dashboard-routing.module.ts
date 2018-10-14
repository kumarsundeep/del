import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleDashboardComponent } from './sample-dashboard.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '',
        component: SampleDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleDashboardRoutingModule { }
