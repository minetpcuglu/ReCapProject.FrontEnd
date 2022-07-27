import { HttpClient } from '@angular/common/http';  //apiye baglanma
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carUrl="https://localhost:44323/api/cars/getall"; //apiye baglanma
  constructor(private httpClient:HttpClient) { } //apiyi cagırırken 

   //subscribe asycn calısma için kullanılır
   //observable : 
   getCars():Observable<ListResponseModel<Car>>{
   return this.httpClient.get<ListResponseModel<Car>>(this.carUrl);
   }

    
}
