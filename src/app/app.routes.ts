import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'product', component: ProductComponent, title: 'Home' },
  {
    path: 'productDedails/:id',
    component: ProductDetailsComponent,
    title: 'Home',
  },
  { path: '**', component: NotFoundComponent, title: 'Home' },
];
