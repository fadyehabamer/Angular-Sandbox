import { AfterViewInit, Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
@Component({
  selector: 'app-order',
  imports: [ProductsComponent, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements AfterViewInit {
  categories: ICategory[];
  selectedCategoryId: number = 0;
  totalOrderPrice: number = 0;

  @ViewChild('customerNameInput') myInput!: ElementRef;
  @ViewChild(ProductsComponent) ProductsComponent!: ProductsComponent;
  constructor(
    private _staticProductsService: StaticProductsService
  ) {
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

  ngAfterViewInit(): void {
    this.myInput.nativeElement.focus();

    console.log(this.ProductsComponent);
  }

  calcTotalPrice = (price: number) => {
    this.totalOrderPrice += price;
  };
}
 