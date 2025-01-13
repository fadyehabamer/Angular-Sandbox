import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { Products } from '../types';

import { PrimeNG } from 'primeng/config';

import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { ProductComponent } from "./components/product/product.component";

import { Product } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProductComponent , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learn';

  // constructor
  // before the component is created
  constructor(private productService: ProductsService , private primeng: PrimeNG) {
  }


  products: Product[] = [];

  onProductOutput(product: Product) {
    console.log(product);
  }

  // ngOnInit
  // after the component is created
  ngOnInit() {

    this.primeng.ripple.set(true);

    this.productService
      .getInternalProducts('http://localhost:3000/clothes', {
        page: 0,
        perPage: 5,
      })
      .subscribe((products: Products) => {
        // console.log(products.items);
        this.products = products.items;
      });
  }
}
