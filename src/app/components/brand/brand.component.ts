import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  dataLoaded =false;
 
   constructor(private brandService:BrandService) { }  //bir service kullanma

  ngOnInit(): void {
   this.getBrands();
    }

  getBrands(){  //subscribe olma nedir => asycn olarak calısmasını saglar
this.brandService.getBrands().subscribe(response=>{
  this.brands =response.data
  this.dataLoaded=true; //sıralı bir sekilde çalışması için
})
  }
setCurrentBrand(brand:Brand){
  console.log(brand.brandName)
}


}
