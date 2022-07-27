import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl="https://localhost:44323/api/customers/getall";

  constructor(private httpclient:HttpClient) { }
  getCustomers():Observable<CustomerResponseModel>{
    return this.httpclient.get<CustomerResponseModel>(this.customerUrl);
  }
}
