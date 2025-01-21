import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ngModel
import { Iproduct } from '../../Models/iproduct';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-products',
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectModule,
    IftaLabelModule,
    InputNumberModule,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Iproduct[];
  categories: ICategory[];
  selectedCategoryId: number | undefined;

  totalOrderPrice: number = 0;

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'This is product 1',
        price: 100,
        quantity: 10,
        imageUrl: 'assets/images/products/image1.jpg',
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'This is product 2',
        price: 200,
        quantity: 20,
        imageUrl: 'assets/images/products/image2.jpg',
        categoryId: 1,
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'This is product 3',
        price: 300,
        quantity: 30,
        imageUrl: 'assets/images/products/image3.jpg',
        categoryId: 2,
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'This is product 4',
        price: 400,
        quantity: 40,
        imageUrl: 'assets/images/products/image4.jpg',
        categoryId: 2,
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'This is product 5',
        price: 500,
        quantity: 50,
        imageUrl: 'assets/images/products/image5.jpg',
        categoryId: 3,
      },
    ];

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

  showId(id: number) {
    alert('this product Id is : ' + id);
  }

  // Add to cart

  addToCart(product: Iproduct, quantity: string) {
    this.totalOrderPrice += product.price * +quantity;
    product.quantity -= +quantity;
  }

  trackByFn (index: number, product: Iproduct) {
    return product.id;
  }

  
}
