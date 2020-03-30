import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select"

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerListService } from './customers-list/customer-list.service';
import { CustomerInfoService } from './customer-info/customer-info.service';

@NgModule({
  declarations: [CustomersListComponent, CustomerInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    CustomerRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [CustomerListService, CustomerInfoService]
})
export class CustomerModule { }
