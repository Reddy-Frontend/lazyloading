import { NgModule } from '@angular/core';;
import { RouterModule,Routes } from '@angular/router';
import{CustomerComponent} from '../customer/customer.component';
const routes:Routes = [
  {
    path:'',component:CustomerComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CustomerRoutingModule { }
