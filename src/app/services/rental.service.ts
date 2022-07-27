import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //apiye baglanma
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rentalUrl="https://localhost:44323/api/rentals/getrentaldetail"; //apiye baglanma
  constructor(private httpClient:HttpClient) { } //apiyi cagırırken 
  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.rentalUrl);

}  
}