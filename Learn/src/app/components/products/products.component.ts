import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
import { SquareNumberPipe } from '../../Pipes/square-number.pipe';
import { StaticProductsService } from '../../services/static-products.service';
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
    RouterLink,
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

  @Input() recivedCategoryId: number | undefined;

  // define event
  @Output() OnTotalPriceChanged: EventEmitter<number> =
    new EventEmitter<number>();

  // Inject the service , instance of the service
  constructor(
    private _staticProductsService: StaticProductsService,
    // inject router
    private router: Router
  ) {
    this.products = _staticProductsService.getAllProducts();
    this.filteredProducts = this.products;
  }
  ngOnChanges() {
    // this.filterProducts();
    this.filteredProducts = this._staticProductsService.getProductByCategory(
      Number(this.recivedCategoryId)
    );
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
  filterProducts() {}

  viewProductDetails(id: number) {
    this.router.navigate(['/productsDetails', id]);
  }
}
