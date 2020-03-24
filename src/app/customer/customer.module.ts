import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { MatTableModule } from '@angular/material/table';
import { CustomerListService } from './customers-list/customer-list.service';


@NgModule({
  declarations: [CustomersListComponent, CustomerInfoComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatTableModule
  ],
  providers:[CustomerListService]
})
export class CustomerModule { }
