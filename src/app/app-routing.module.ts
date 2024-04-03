import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent, title: 'Booking - Login' },
  // { path: 'forgot', component: ForgotComponent, title: 'Booking - Forgot Password' },
  // { path: 'admin',canActivate: [AuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // //,canActivate: [AuthGuard]
  // {
  //   path: '**',
  //   redirectTo: '/login'
  // },

   // {path: '404.html', component: NotofoundComponent},
  // {
  //   path: '**',
  //   redirectTo: '/404'
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
