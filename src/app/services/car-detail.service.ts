import { HttpClient } from '@angular/common/http';  //apiye baglanma
import { Injectable } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';






@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  carUrl="https://localhost:44323/api/"; //apiye baglanma
  constructor(private httpClient:HttpClient ) { } //apiyi cagırırken 

   //subscribe asycn calısma için kullanılır
   //observable : 
   getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.carUrl +"cars/getcardetail"
   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }

  //  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
  //   let newPath=this.carUrl +"cars/getbycolorid?colorId="+colorId
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  //   }

  //   getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
  //     let newPath=this.carUrl +"cars/getbybrandid?brandId="+brandId
  //     return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  //     }

  
  }
