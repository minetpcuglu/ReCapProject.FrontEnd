import { HttpClient } from '@angular/common/http';  //apiye baglanma
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44323/api/colors/getall"; //apiye baglanma
  constructor(private httpClient:HttpClient) { } //apiyi cagırırken 

   //subscribe asycn calısma için kullanılır
   //observable : 
   getColors():Observable<ColorResponseModel>{
   return this.httpClient.get<ColorResponseModel>(this.apiUrl);
   }

    
}
