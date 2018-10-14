import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'login',
  //   data: {
  //     title: 'Login'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './modules/login/login.module#LoginModule'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '',
  //   data: {
  //     title: 'Main'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
  //       canActivate: [AuthGuard]
  //     }, 
  //     {
  //       path: 'page',
  //       loadChildren: './modules/page/page.module#PageModule',
  //       canActivate: [AuthGuard]
  //     }
  //   ]
  // }


  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'Sample'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/sample/sample.module#SampleModule'
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
