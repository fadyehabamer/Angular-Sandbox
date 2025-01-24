import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  @Input() totalOrderPrice: number = 0;

  constructor() { 
  }
}
