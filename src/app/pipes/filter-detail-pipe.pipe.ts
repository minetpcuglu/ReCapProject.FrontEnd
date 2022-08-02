import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

  @Pipe({
    name: 'filterDetailPipe'
  })
  export class FilterDetailPipePipe implements PipeTransform {
  
    transform(value: CarDetail[],filterText:string): CarDetail[] {
      filterText= filterText?filterText.toLocaleLowerCase():"" //filtertext varmı ? varsa kucult 
      return filterText?value.filter((c:CarDetail)=>c.brandName.toLocaleLowerCase().
      indexOf(filterText)!==-1):value;  ///filteleme sartlarına uyanları yeni bir arraye atar
    }
}
