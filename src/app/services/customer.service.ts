import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl="https://localhost:44323/api/customers/getall";

  constructor(private httpclient:HttpClient) { }
  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.httpclient.get<ListResponseModel<Customer>>(this.customerUrl);
  }
}
