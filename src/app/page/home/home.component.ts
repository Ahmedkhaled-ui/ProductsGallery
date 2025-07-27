import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct/iproduct';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly productsService = inject(ProductsService);

  products: WritableSignal<Iproduct[]> = signal([]);
  showProduct: WritableSignal<boolean> = signal(false);
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.showProduct.set(false);
    this.productsService.getAllProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.products.set(res);
        this.showProduct.set(true);
      },
    });
  }
}
