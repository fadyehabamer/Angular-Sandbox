import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
import { HighlightElementDirective } from '../../directives/highlight-element.directive';
import { SquareNumberPipe } from '../../Pipes/square-number.pipe';
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
    SquareNumberPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnChanges {
  products: Iproduct[];
  filteredProducts: Iproduct[] = [];

  // want to show it in the order component
  totalOrderPrice: number = 0;

  myDate: Date = new Date();
  customNumberPipe: number = 4;

  @Input() recivedCategoryId : number | undefined;


  // define event
  @Output() OnTotalPriceChanged : EventEmitter<number> = new EventEmitter<number>();

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

   
    this.filteredProducts = this.products;
  }
  ngOnChanges() {
    this.filterProducts();
  }

  showId(id: number) {
    alert('this product Id is : ' + id);
  }

  // Add to cart

  addToCart(product: Iproduct, quantity: string) {
    this.totalOrderPrice += product.price * +quantity;
    product.quantity -= +quantity;

    // emit event
    this.OnTotalPriceChanged.emit(this.totalOrderPrice);

  }

  trackByFn(index: number, product: Iproduct) {
    return product.id;
  }



  // Filter products by category
  filterProducts() {
    if (this.recivedCategoryId == 0) {
      this.filteredProducts = this.products;
      return;
    }
    console.log(this.recivedCategoryId);

    this.filteredProducts = this.products.filter(
      (product) => product.categoryId == this.recivedCategoryId
    );
  }
  
}
