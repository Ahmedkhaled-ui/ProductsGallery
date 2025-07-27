import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../../../core/interfaces/iproduct/iproduct';

@Pipe({
  name: 'filterBySort',
})
export class FilterBySortPipe implements PipeTransform {
  transform(product: Iproduct[], sortOption: string): Iproduct[] {
    switch (sortOption) {
      case 'priceAsc':
        return [...product].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...product].sort((a, b) => b.price - a.price);
      case 'nameAsc':
        return [...product].sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      case 'nameDesc':
        return [...product].sort((a, b) =>
          b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
    }
    return product;
  }
}
