import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../interfaces/customer';

const customersData: ICustomer[] = [{
  "id": 1,
  "firstName": "Kala",
  "lastName": "Blakeslee",
  "totalPurchases": 31
}, {
  "id": 2,
  "firstName": "Lew",
  "lastName": "Domoney",
  "totalPurchases": 78
}, {
  "id": 3,
  "firstName": "Brion",
  "lastName": "Pridgeon",
  "totalPurchases": 68
}, {
  "id": 4,
  "firstName": "Reynolds",
  "lastName": "Stenbridge",
  "totalPurchases": 51
}, {
  "id": 5,
  "firstName": "Loralie",
  "lastName": "Stoade",
  "totalPurchases": 92
}, {
  "id": 6,
  "firstName": "Kristofer",
  "lastName": "Fritter",
  "totalPurchases": 7
}, {
  "id": 7,
  "firstName": "Malcolm",
  "lastName": "Paulo",
  "totalPurchases": 35
}, {
  "id": 8,
  "firstName": "Kyle",
  "lastName": "Bromehed",
  "totalPurchases": 1
}, {
  "id": 9,
  "firstName": "Guss",
  "lastName": "Chinn",
  "totalPurchases": 44
}, {
  "id": 10,
  "firstName": "Wilek",
  "lastName": "Meak",
  "totalPurchases": 51
}];

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedCols: string[] = ["id", "firstName", "lastName", "totalPurchases"];
  dataSource = customersData;

}
