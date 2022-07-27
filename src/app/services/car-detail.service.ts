import { HttpClient } from '@angular/common/http';  //apiye baglanma
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  carUrl="https://localhost:44323/api/cars/getcardetail"; //apiye baglanma
  constructor(private httpClient:HttpClient) { } //apiyi cagırırken 

   //subscribe asycn calısma için kullanılır
   //observable : 
   getCarDetails():Observable<CarDetailResponseModel>{
   return this.httpClient.get<CarDetailResponseModel>(this.carUrl);
   }
  }
