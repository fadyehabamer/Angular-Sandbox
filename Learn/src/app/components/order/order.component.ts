import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [ProductsComponent , FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  categories: ICategory[];
  selectedCategoryId: number = 0;
  totalOrderPrice: number = 0;

  constructor() {
    this.categories = [
      {
        id: 1,
        name: 'Category 1',
      },
      {
        id: 2,
        name: 'Category 2',
      },
      {
        id: 3,
        name: 'Category 3',
      },
    ];
  
    
  }


  calcTotalPrice = (price: number) => {
    this.totalOrderPrice += price;
  }

}
