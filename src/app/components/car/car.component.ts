import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  dataLoaded =false;
 
   constructor(private carService:CarService) { }  //bir service kullanma

  ngOnInit(): void {
   this.getCars();
    }

  getCars(){  //subscribe olma nedir => asycn olarak calısmasını saglar
this.carService.getCars().subscribe(response=>{
  this.cars =response.data
  this.dataLoaded=true; //sıralı bir sekilde çalışması için
})
  }


}
