import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { TransationsComponent } from './components/transations/transations.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'user-home',component:UserHomeComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'transations',component:TransationsComponent},
  {path:'maintenance',component:MaintenanceComponent},
  {path:'reports',component:ReportsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
