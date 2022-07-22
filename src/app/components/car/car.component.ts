import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import {HttpClient} from '@angular/common/http'; //apiye baglanma backend istegi atma 

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carUrl="https://localhost:44323/api/cars/getall";
   constructor(private httpClient:HttpClient) { }  //apiyi enjecte etme 

  ngOnInit(): void {
   this.getCars();
    }


  //subscribe asycn calısma için kullanılır
  getCars(){
this.httpClient.
get<CarResponseModel>(this.carUrl).
subscribe((response)=>{
  this.cars=response.data
});


  }
}
