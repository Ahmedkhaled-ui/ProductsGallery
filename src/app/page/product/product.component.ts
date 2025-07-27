import { FilterByNamePipe } from './../../shared/pipes/filterByName/filter-by-name.pipe';
import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Iproduct } from '../../core/interfaces/iproduct/iproduct';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterBySortPipe } from '../../shared/pipes/filterBySort/filter-by-sort.pipe';

@Component({
  selector: 'app-product',
  imports: [RouterLink, FilterByNamePipe, FormsModule, FilterBySortPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  products: WritableSignal<Iproduct[]> = signal([]);
  searchByName: string = '';
  searchByOption: string = '';
  showProduct: boolean = false;
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.showProduct = false;
    this.productsService.getAllProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.products.set(res);
        this.showProduct = true;
      },
    });
  }
}
