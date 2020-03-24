import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../interfaces/customer';
import { CustomerListService } from './customer-list.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(private customerListService: CustomerListService) { }

  ngOnInit(): void {
    this.getCustomersList();
  }

  displayedCols: string[] = ["id", "firstName", "lastName", "purchasesTotalValue", "purchasesCount"];
  dataSource: ICustomer[] = [];

  getCustomersList(): void {
    this.customerListService.getCustomersList().subscribe(customers => this.dataSource = customers)
  }
}
