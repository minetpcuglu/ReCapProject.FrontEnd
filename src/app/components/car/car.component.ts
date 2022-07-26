import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  filterText=""; //arama filtresi
  dataLoaded =false;
 
   constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }  //bir service kullanma


ngOnInit(): void {
  this.activatedRoute.params.subscribe((params) => {
    if (params['brandId']) {
      this.getCarsByBrand(params['brandId']);
    } else if (params['colorId']) {
      this.getCarsByColor(params['colorId']);
    } else {
      this.getCars();
    }
  });
}


  getCars(){  //subscribe olma nedir => asycn olarak calısmasını saglar
this.carService.getCars().subscribe(response=>{
  this.cars = response.data
  this.dataLoaded=true; //sıralı bir sekilde çalışması için
})
  }


getCarsByColor(colorId:number){  //subscribe olma nedir => asycn olarak calısmasını saglar
  this.carService.getCarsByColor(colorId).subscribe(response=>{
    this.cars =response.data
    this.dataLoaded=true; //sıralı bir sekilde çalışması için
  })
}

  getCarsByBrand(brandId:number){  //subscribe olma nedir => asycn olarak calısmasını saglar
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars =response.data
      this.dataLoaded=true; //sıralı bir sekilde çalışması için
    })
  

  }
}
