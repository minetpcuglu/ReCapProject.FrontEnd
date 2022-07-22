import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = {
    carId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 1999,
    dailyPrice: 200000,
    description: 'mine',
  };
  car2 = {
    carId: 2,
    brandId: 2,
    colorId: 2,
    modelYear: 2000,
    dailyPrice: 300000,
    description: 'Elif',
  };
  car3 = {
    carId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 1990,
    dailyPrice: 500000,
    description: 'emre',
  };
  car4 = {
    carId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 1998,
    dailyPrice: 600000,
    description: 'gönül',
  };

  cars:Car[] = [this.car1, this.car2, this.car3, this.car4];
  constructor() { }

  ngOnInit(): void {
  }

}
