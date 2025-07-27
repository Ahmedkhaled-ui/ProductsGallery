import { Iproduct } from './../../core/interfaces/iproduct/iproduct';
import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { single } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  products: WritableSignal<Iproduct[]> = signal([]);
  showProduct: WritableSignal<boolean> = signal(false);

  productDetails: WritableSignal<Iproduct> = signal({} as Iproduct);
  productId: WritableSignal<string> = signal('');
  ngOnInit(): void {
    this.getproductId();
    this.getProduct();
    this.getRelatedproduct();
  }
  getproductId(): void {
    this.showProduct.set(false);
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log(res.id);
        this.productId.set(res.id);
        this.showProduct.set(true);

        this.getProduct();
      },
    });
  }
  getProduct(): void {
    this.showProduct.set(false);

    this.productsService.getAllProduct(this.productId()).subscribe({
      next: (res) => {
        this.productDetails.set(res);
        console.log(res);
        this.showProduct.set(true);
      },
    });
  }

  getRelatedproduct(): void {
    this.productsService.getAllProduct().subscribe({
      next: (res) => {
        this.products.set(res);
        console.log(res);
      },
    });
  }
}
