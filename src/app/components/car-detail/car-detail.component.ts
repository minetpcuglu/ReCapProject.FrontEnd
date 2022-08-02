import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {

  carDetails:CarDetail[] = [];
  filterText=""; //arama filtresi
  dataLoaded =false;
 
   constructor(private carDetailService:CarDetailService,private toastrService:ToastrService) { }  //bir service kullanma

  ngOnInit(): void {
   this.getCarDetails();
    }

    getCarDetails(){  //subscribe olma nedir => asycn olarak calısmasını saglar
this.carDetailService.getCarDetails().subscribe(response=>{
  this.carDetails =response.data
  this.dataLoaded=true; //sıralı bir sekilde çalışması için
})
  }

  addToCart(carDetail:CarDetail){
   this.toastrService.success("Kiralanması için Sepete Eklendi",carDetail.brandName + " " + carDetail.description + " " + carDetail.colorName)

  }

}

