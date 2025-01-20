import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { PrimeNG } from 'primeng/config';
import { Product } from '../types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learn';

  // constructor
  // before the component is created
  constructor(private primeng: PrimeNG) {
  }


  products: Product[] = [];

  onProductOutput(product: Product) {
    console.log(product);
  }

  
  ngOnInit() {

    this.primeng.ripple.set(true);
  }
}
