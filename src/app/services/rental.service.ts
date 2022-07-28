import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //apiye baglanma
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rentalUrl="https://localhost:44323/api/rentals/getrentaldetail"; //apiye baglanma
  constructor(private httpClient:HttpClient) { } //apiyi cagırırken 
  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.rentalUrl);

}  
}