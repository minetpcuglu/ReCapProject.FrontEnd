import { HttpClient } from '@angular/common/http';  //apiye baglanma
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {
  carUrl: string = 'https://localhost:44323/api/';//apiye baglanma
  constructor(private httpClient:HttpClient) { } //apiyi cagırırken 

      //subscribe asycn calısma için kullanılır
   //observable : 
   getCars():Observable<ListResponseModel<Car>>{
    let newPath: string = `${this.carUrl}cars/getall`;
    // let newPath=this.carUrl +"cars/getall"
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }

   getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath: string = `${this.carUrl}cars/getcarsbycolorid?colorid=${colorId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }

    getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath:string = `${this.carUrl}cars/getbybrandid?brandid=${brandId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
      }

    
}
