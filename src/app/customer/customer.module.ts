import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';



@NgModule({
  declarations: [CustomersListComponent, CustomerInfoComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
