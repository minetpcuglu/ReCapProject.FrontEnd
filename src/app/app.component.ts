import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ReCapProject.FrontEnd';
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

  cars = [this.car1, this.car2, this.car3, this.car4];
}
