import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../interfaces/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3000/api';

  getCustomersList(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${this.baseUrl}/customers/purchases`);
  }
}
