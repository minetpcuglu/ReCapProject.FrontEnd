import { HttpClient } from '@angular/common/http';  //apiye baglanma
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44323/api/brands/getall"; //apiye baglanma
  constructor(private httpClient:HttpClient) { } //apiyi cagırırken 

   //subscribe asycn calısma için kullanılır
   //observable : 
   getBrands():Observable<ListResponseModel<Brand>>{
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
   }

    
}
