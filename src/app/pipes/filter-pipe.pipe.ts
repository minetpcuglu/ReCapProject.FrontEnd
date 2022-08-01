import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[],filterText:string): Car[] {
    filterText= filterText?filterText.toLocaleLowerCase():"" //filtertext varmı ? varsa kucult 
    return filterText?value.filter((c:Car)=>c.description.toLocaleLowerCase().
    indexOf(filterText)!==-1):value;  ///filteleme sartlarına uyanları yeni bir arraye atar
  }

}
