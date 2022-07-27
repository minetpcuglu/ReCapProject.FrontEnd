import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = [];
  currentColor:Color;
  dataLoaded =false;
 
   constructor(private colorService:ColorService) { }  //bir service kullanma

  ngOnInit(): void {
   this.getColors();
    }

  getColors(){  //subscribe olma nedir => asycn olarak calısmasını saglar
this.colorService.getColors().subscribe(response=>{
  this.colors =response.data
  this.dataLoaded=true; //sıralı bir sekilde çalışması için
})
  }

setCurrentColor(color:Color){
  this.currentColor=color; //tsconfig.json dan sonra bunu yapabilriz
}

//secme aktive -->
getCurrentColorActive(color:Color){
if(color==this.currentColor){
  return "list-group-item active"
}
else{
  return "list-group-item"
}



}
}

