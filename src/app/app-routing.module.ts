import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EmployeesComponent} from './employees/employees.component'
const routes: Routes = [
  {
   path:'',
   component:EmployeesComponent
  },
  {
    path:'customer',
    loadChildren:() => import('./customer/customer.module').then( m=> m.CustomerModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
