import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../../../core/interfaces/iproduct/iproduct';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(product: Iproduct[], searchByName: string): Iproduct[] {
    return product.filter((ele) =>
      ele.title.toLowerCase().includes(searchByName.toLowerCase())
    );
  }
}
